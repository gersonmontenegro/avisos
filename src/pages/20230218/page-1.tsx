import React, {memo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, WomenDay} from 'assets/img';
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
import {HeaderTitleText, MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';

const textTheme = {
  color: colors.black,
};

const Page1Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitleText>Avisos para hoy, 18-02-2023</HeaderTitleText>
        </MainTitle>
        <Content>
          <SubContent>
            <SideTextContainer className={styles['.white-background']}>
              <NormalText>Sábado 4 de Marzo</NormalText>
              <TitleText>Día especial del Ministerio de la Mujer</TitleText>
              <FrameContainer>
                <SubTitleText>¡También habrá programa por la tarde!</SubTitleText>
              </FrameContainer>
            </SideTextContainer>
            <SideTextContainer className={styles['.white-background']}>
              <img src={WomenDay} />
            </SideTextContainer>
          </SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page1 = memo(Page1Component);
