import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, Bible} from 'assets/img';
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

const Page2Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={Bible} />
      </SideTextContainer>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <TitleText>Conferencia Bíblica</TitleText>
        <NormalText>Para crecer y fortalecer nuestra vida espiritual</NormalText>
        <FrameContainer>
          <NormalText>Abril</NormalText>
          <NormalTextBold>Miércoles 26</NormalTextBold>
          <NormalTextBold>a Sábado 29</NormalTextBold>
        </FrameContainer>
      </SideTextContainer>
    );
  }, []);
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
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

export const Page2 = memo(Page2Component);
