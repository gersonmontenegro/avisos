import React, {memo, useEffect, useRef, useState, type KeyboardEvent} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {get, isNull, isUndefined} from 'lodash';
import {palette20230218, Keys, SECTION_SEL} from '../utils';
import {Page1, Page2, Page3, Page4} from 'pages/20230225';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.

const SlidesComponent = (): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const pageRef = useRef(null);
  const [sectionsColor] = useState([...palette20230218]);

  const onLeave = (origin: any, destination: any, direction: any): void => {
    // console.log('onLeave', {origin, destination, direction});
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

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

  useEffect(() => {
    const onFullscreenChange = (): void => {
      console.log('isFullscreen:', isFullscreen);

      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  return (
    <div className="App" onKeyDown={onPressKeyboard}>
      <ReactFullpage
        debug /* Debug logging */
        // fullpage options
        licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage']}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        ref={pageRef}
        render={() => (
          <ReactFullpage.Wrapper>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export const Slides = memo(SlidesComponent);
