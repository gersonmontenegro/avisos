import React, {memo, useRef, useState, type KeyboardEvent} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {get, isNull, isUndefined} from 'lodash';
import {originalColors, Keys} from '../utils';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.

const originalPages = [
  {text: 'Section 1', id: 1},
  {text: 'Section 2', id: 2},
  {text: 'Section 3', id: 2},
];

const SlidesComponent = (): JSX.Element => {
  const pageRef = useRef(null);
  const [sectionsColor] = useState([...originalColors]);
  const [fullpages] = useState([...originalPages]);

  const onLeave = (origin: any, destination: any, direction: any): void => {
    console.log('onLeave', {origin, destination, direction});
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  // const handleChangeColors = (): void => {
  //   const newColors =
  //     sectionsColor[0] === 'yellow' ? [...originalColors] : ['yellow', 'blue', 'white'];
  //   setsectionsColor(newColors);
  // };

  // const handleAddSection = (): void => {
  //   const {length} = fullpages;
  //   fullpages.push({
  //     text: `section ${length + 1}`,
  //     id: Math.random(),
  //   });
  //   setfullpages([...fullpages]);
  // };

  // const handleRemoveSection = (): void => {
  //   const newPages = [...fullpages];
  //   newPages.pop();
  //   setfullpages(newPages);
  // };

  const onPressKeyboard = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === Keys.ArrowDown) {
      moveSectionDown();
    }

    if (event.key === Keys.ArrowUp) {
      moveSectionUp();
    }
  };

  const moveSectionDown = (): void => {
    if (!isUndefined(pageRef.current) && !isNull(pageRef.current)) {
      const fullApi = pageRef.current as {fullpageApi: unknown};
      const moveDown = get(fullApi.fullpageApi, 'moveSectionDown', () => null);
      moveDown();
    }
  };

  const moveSectionUp = (): void => {
    if (!isUndefined(pageRef.current) && !isNull(pageRef.current)) {
      const fullApi = pageRef.current as {fullpageApi: unknown};
      const moveUp = get(fullApi.fullpageApi, 'moveSectionUp', () => null);
      moveUp();
    }
  };

  // const Menu = (): JSX.Element => (
  //   <div
  //     className="menu"
  //     style={{
  //       position: 'fixed',
  //       top: 0,
  //       zIndex: 100,
  //     }}>
  //     <ul className="actions">
  //       <li>
  //         <button onClick={handleAddSection}> Add Section </button>
  //         <button onClick={handleRemoveSection}> Remove Section </button>
  //         <button onClick={handleChangeColors}> Change background colors </button>
  //         <button onClick={moveSectionDown}> Move Section Down </button>
  //       </li>
  //     </ul>
  //   </div>
  // );

  return (
    <div className="App" onKeyDown={onPressKeyboard}>
      {/* <Menu /> */}
      <ReactFullpage
        debug /* Debug logging */
        // fullpage options
        licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        ref={pageRef}
        render={() => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({text}) => (
              <div key={text} className={SEL}>
                <h1>{text}</h1>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export const Slides = memo(SlidesComponent);

// const rootElement = document.getElementById('react-root');
// ReactDOM.render(<Slides />, rootElement);
