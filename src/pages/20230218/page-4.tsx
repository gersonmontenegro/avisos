import React, {memo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, CenaHoy} from 'assets/img';
import {
  Container,
  Content,
  FrameContainer,
  Logo,
  SideTextContainer,
  SubContent,
  SubTitleText,
  TitleText,
} from 'pages/css/styled-components';
import {HeaderTitleText, MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';

const pageTheme = {
  color: colors.white,
  pageBackground: colors.lightred,
};

const Page4Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={pageTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitleText>Avisos para hoy, 18-02-2023</HeaderTitleText>
        </MainTitle>
        <Content>
          <SubContent>
            <SideTextContainer className={styles['.white-background']}>
              <img src={CenaHoy} />
            </SideTextContainer>
            <SideTextContainer className={styles['.white-background']}>
              <TitleText>¡Hoy, Cena de parejas!</TitleText>
              <FrameContainer>
                <SubTitleText>A las 19:00</SubTitleText>
              </FrameContainer>
            </SideTextContainer>
          </SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page4 = memo(Page4Component);
