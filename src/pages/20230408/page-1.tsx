import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, Bautizo} from 'assets/img';
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

const Page1Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={Bautizo} />
      </SideTextContainer>
    );
  }, []);

  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <TitleText>Ceremonia Bautismal</TitleText>
        <TodayContainer color={colors.lightblue}>¡Hoy!</TodayContainer>
        <NormalText>Ceremonia bautismal, y comida fraternal.</NormalText>
        <FrameContainer>
          <SubTitleText>Lugar: Calahonda, Mijas</SubTitleText>
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

export const Page1 = memo(Page1Component);
