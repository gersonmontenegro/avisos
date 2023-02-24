import React, {memo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, Familia} from 'assets/img';
import {
  Container,
  Content,
  FrameContainer,
  Image,
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
  color: colors.white,
  pageBackground: colors.lightgreen,
};

const Page2Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitleText>Avisos para hoy, 18-02-2023</HeaderTitleText>
        </MainTitle>
        <Content>
          <SubContent>
            <SideTextContainer className={styles['.white-background']}>
              <Image src={Familia} height={600} width={500} />
            </SideTextContainer>
            <SideTextContainer className={styles['.white-background']}>
              <NormalText>Sábado 25 de Febrero</NormalText>
              <TitleText>Programa especial para la familia</TitleText>
              <FrameContainer>
                <SubTitleText>A las 17:30</SubTitleText>
              </FrameContainer>
            </SideTextContainer>
          </SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page2 = memo(Page2Component);
