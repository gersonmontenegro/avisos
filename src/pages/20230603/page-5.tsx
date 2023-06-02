import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, ReuClubClean} from 'assets/img';
import {
  Container,
  Content,
  FrameContainer,
  Logo,
  NormalText,
  SideTextContainer,
  SubContent,
  SubTitleBoldText,
  SubTitleText,
  TitleText,
} from 'pages/css/styled-components';
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const textTheme = {
  color: colors.black,
};

const Page5Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={ReuClubClean} width="500px" height="500px" />
      </SideTextContainer>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <NormalText>Próxima reunión de Club</NormalText>
        <SubTitleBoldText>Domingo 7 de Mayo</SubTitleBoldText>
        <TitleText>Parque Mari Carmen Díez (Fuengiorola)</TitleText>
        <FrameContainer>
          <SubTitleText>11:00 horas</SubTitleText>
        </FrameContainer>
      </SideTextContainer>
    );
  }, []);

  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <MainTitle></MainTitle>
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

export const Page5 = memo(Page5Component);
