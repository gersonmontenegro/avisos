import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, Ensalada} from 'assets/img';
import {
  Container,
  Content,
  Logo,
  NormalText,
  SideTextContainer,
  TitleText,
  SubContent,
  FrameContainer,
  SubTitleText,
  TodayContainer,
} from 'pages/css/styled-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const textTheme = {
  color: colors.black,
};

const Page7Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={Ensalada} height={900} />
      </SideTextContainer>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <SubTitleText>
          ¡El Club de Exploradores invita a degustar una deliciosa Ensalada de frutas!
        </SubTitleText>
        <NormalText>La meta es ir al Camporee Nacional</NormalText>
        <NormalText>¡Apoya y colabora con los niños de nuestra iglesia!</NormalText>
        <TodayContainer color={colors.lightblue}>¡Hoy!</TodayContainer>
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

export const Page7 = memo(Page7Component);
