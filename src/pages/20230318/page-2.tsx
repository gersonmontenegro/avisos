import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, GYD} from 'assets/img';
import {
  Container,
  Content,
  Logo,
  NormalText,
  NormalTextBoldVertical,
  SideTextContainerVertical,
  SubContentVertical,
} from 'pages/css/styled-components';
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const textTheme = {
  color: colors.black,
};

const Page2Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainerVertical className={styles['.white-background']}>
        <img src={GYD} />
      </SideTextContainerVertical>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainerVertical className={styles['.white-background']}>
        <NormalTextBoldVertical>
          Hoy los jóvenes de nuestra Iglesia están participando del Global Youth Day. ¡Oremos para
          que sean testimonio vivo a las personas!
        </NormalTextBoldVertical>
      </SideTextContainerVertical>
    );
  }, []);
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <Content>
          <SubContentVertical>
            {sideA}
            {sideB}
          </SubContentVertical>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page2 = memo(Page2Component);
