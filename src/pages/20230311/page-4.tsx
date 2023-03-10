import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, FelizSabado, YellowLogo} from 'assets/img';
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
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const pageTheme = {
  color: colors.white,
  pageBackground: colors.lightblue,
};

const Page4Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <Image src={YellowLogo} height={100} width={100} />
        <TitleText>Siguiente reunión de estudio de la Biblia, y oración. Presencial.</TitleText>
        <FrameContainer>
          <SubTitleText>Viernes 17 de Marzo. 20:00 horas</SubTitleText>
        </FrameContainer>
      </SideTextContainer>
    );
  }, []);
  const sideB = useMemo(() => {
    return (
      <SideTextContainer className={styles['.white-background']}>
        <img src={FelizSabado} />
      </SideTextContainer>
    );
  }, []);
  return (
    <ThemeProvider theme={pageTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitle />
        </MainTitle>
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

export const Page4 = memo(Page4Component);
