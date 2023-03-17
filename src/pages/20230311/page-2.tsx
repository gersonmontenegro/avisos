import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, WomenDay} from 'assets/img';
import {
  Container,
  Content,
  FrameContainer,
  Logo,
  // NormalText,
  SideTextContainer,
  SubContent,
  SubTitleText,
  TitleText,
  TodayContainer,
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
      <SideTextContainer className={styles['.white-background']}>
        <TodayContainer color={colors.pink2}>¡Hoy!</TodayContainer>
        <TitleText>Día especial del Ministerio de la Mujer</TitleText>
        <FrameContainer>
          <SubTitleText>¡También habrá programa por la tarde! A las 17:30</SubTitleText>
        </FrameContainer>
      </SideTextContainer>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={WomenDay} />
      </SideTextContainer>
    );
  }, []);
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitle />
        </MainTitle>
        <Content>
          <SubContent>
            {sideA}
            {sideB}
          </SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page2 = memo(Page2Component);
