import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, Campamento} from 'assets/img';
import {
  Container,
  Content,
  Logo,
  NormalText,
  NormalTextBold,
  SideTextContainer,
  ImageContainer,
  TitleText,
  SubContent,
  FrameContainer,
  TitleOverImage,
  TitleOverImageBottom,
} from 'pages/css/styled-components';
import {ThemeProvider} from 'styled-components';

const textTheme = {
  color: colors.black,
};

const Page1Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <div>
        <ImageContainer className={styles['image-container']}>
          <img src={Campamento} />
        </ImageContainer>
        <TitleOverImage>Campamento regional de Exploradores. Del 12 al 14 de Mayo</TitleOverImage>
        <TitleOverImageBottom>Oremos para que sea de gran bendición</TitleOverImageBottom>
      </div>
    );
  }, []);

  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <Content>
          <SubContent>{sideA}</SubContent>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page1 = memo(Page1Component);
