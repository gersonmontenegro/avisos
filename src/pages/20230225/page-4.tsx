import React, {memo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, YellowLogo, ReuClub} from 'assets/img';
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

const pageTheme = {
  color: colors.white,
  pageBackground: colors.lightblue,
};

const Page4Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={pageTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitle />
        </MainTitle>
        <Content>
          <SubContent>
            <SideTextContainer className={styles['.white-background']}>
              <TodayContainer>¡Hoy!</TodayContainer>
              <Image src={YellowLogo} height={100} width={100} />
              <TitleText>Reunión de Club</TitleText>
              <NormalText>En el local de la Iglesia</NormalText>
              <FrameContainer>
                <SubTitleText>A las 16:30</SubTitleText>
              </FrameContainer>
            </SideTextContainer>
            <SideTextContainer className={styles['.white-background']}>
              <img src={ReuClub} width="500px" height="500px" />
            </SideTextContainer>
          </SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page4 = memo(Page4Component);
