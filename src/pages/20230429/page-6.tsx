import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, Exploradora} from 'assets/img';
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
} from 'pages/css/styled-components';
import {ThemeProvider} from 'styled-components';

const textTheme = {
  color: colors.black,
};

const Page6Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={Exploradora} />
      </SideTextContainer>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <TitleText>Campamento regional de exploradores</TitleText>
        <FrameContainer>
          <NormalText>Mayo</NormalText>
          <NormalTextBold>Viernes 12</NormalTextBold>
          <NormalTextBold>Domingo 14</NormalTextBold>
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

export const Page6 = memo(Page6Component);
