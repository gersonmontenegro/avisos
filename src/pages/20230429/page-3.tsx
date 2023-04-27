import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, Vigilia} from 'assets/img';
import {
  Container,
  Content,
  Logo,
  NormalText,
  NormalTextBold,
  SideTextContainer,
  TitleText,
  SubContent,
  FrameContainer,
  SubTitleText,
  TodayContainer,
} from 'pages/css/styled-components';
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const textTheme = {
  color: colors.black,
};

const Page3Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={Vigilia} />
      </SideTextContainer>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.gray-background']}>
        <TodayContainer>¡Hoy!</TodayContainer>
        <TitleText>Vigilia</TitleText>
        <FrameContainer>
          <SubTitleText>Hora de inicio: 19:00 horas</SubTitleText>
        </FrameContainer>
      </SideTextContainer>
    );
  }, []);
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
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

export const Page3 = memo(Page3Component);
