import React, {memo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, FelizSabado, Zoom} from 'assets/img';
import {
  Container,
  Content,
  FrameContainer,
  Image,
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
  pageBackground: colors.lightblue,
};

const Page3Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={pageTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitleText>Avisos para hoy, 18-02-2023</HeaderTitleText>
        </MainTitle>
        <Content>
          <SubContent>
            <SideTextContainer className={styles['.white-background']}>
              <Image src={Zoom} height={100} width={100} />
              <TitleText>
                Recordamos que el siguiente Viernes la reunión de recibimiento de Sábado es vía Zoom
              </TitleText>
              <FrameContainer>
                <SubTitleText>A las 20:00</SubTitleText>
              </FrameContainer>
            </SideTextContainer>
            <SideTextContainer className={styles['.white-background']}>
              <img src={FelizSabado} />
            </SideTextContainer>
          </SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page3 = memo(Page3Component);
