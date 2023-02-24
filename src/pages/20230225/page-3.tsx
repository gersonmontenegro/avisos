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
  TodayContainer,
} from 'pages/css/styled-components';
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const textTheme = {
  color: colors.white,
  pageBackground: colors.lightgreen,
};

const Page3Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitle />
        </MainTitle>
        <Content>
          <SubContent>
            <SideTextContainer className={styles['.white-background']}>
              <Image src={Familia} height={600} width={500} />
            </SideTextContainer>
            <SideTextContainer className={styles['.white-background']}>
              <TodayContainer>¡Hoy!</TodayContainer>
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

export const Page3 = memo(Page3Component);
