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
  NormalText,
  SideTextContainer,
  SubContent,
  SubTitleText,
  TitleText,
} from 'pages/css/styled-components';
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const pageTheme = {
  color: colors.white,
  pageBackground: colors.lightblue,
};

const Page5Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <NormalText>Sábado 11 de Marzo</NormalText>
        <TitleText>Programa JA</TitleText>
        <FrameContainer>
          <SubTitleText>17:30 horas</SubTitleText>
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
        <MainTitle>
          <HeaderTitle />
        </MainTitle>
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

export const Page5 = memo(Page5Component);
