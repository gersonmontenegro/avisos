import React, {memo} from 'react';
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

const Page2Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={pageTheme}>
      <Container className={SEL}>
        <MainTitle>
          <HeaderTitle />
        </MainTitle>
        <Content>
          <SubContent>
            <SideTextContainer className={styles['.white-background']}>
              <Image src={YellowLogo} height={100} width={100} />
              <TitleText>
                Recordamos que el siguiente Viernes la reunión de recibimiento de Sábado es
                presencial
              </TitleText>
              <FrameContainer>
                <SubTitleText>Viernes 3 de Marzo, a las 20:00</SubTitleText>
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

export const Page2 = memo(Page2Component);
