import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, JA} from 'assets/img';
import {
  Container,
  Content,
  FrameContainer,
  Logo,
  SideTextContainer,
  SubContent,
  SubTitleText,
  TitleText,
  TodayContainer,
} from 'pages/css/styled-components';
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';

const pageTheme = {
  color: colors.white,
  pageBackground: colors.lightblue,
};

const Page6Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <TodayContainer>¡Hoy!</TodayContainer>
        <TitleText>Programa Sociedad de Jóvenes</TitleText>
        <FrameContainer>
          <SubTitleText>18:00 horas</SubTitleText>
        </FrameContainer>
      </SideTextContainer>
    );
  }, []);
  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={JA} />
      </SideTextContainer>
    );
  }, []);
  return (
    <ThemeProvider theme={pageTheme}>
      <Container className={SEL}>
        <MainTitle></MainTitle>
        <Content>
          <SubContent>
            {sideB}
            {sideA}
          </SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page6 = memo(Page6Component);
