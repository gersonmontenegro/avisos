import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, ParqueLaPaloma} from 'assets/img';
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
  TitleOverImageBottom,
  ImageOverImageBottom,
  TitleOverImageBottomSide,
} from 'pages/css/styled-components';
import {ThemeProvider} from 'styled-components';

const textTheme = {
  color: colors.black,
  bottomTitle: colors.white,
  imageOverBottomWidth: 'auto',
  titleOverBottomWidth: '600px',
};

const Page7Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <div>
        <ImageContainer className={styles['image-container']}>
          <img src={ParqueLaPaloma} />
          <div className={styles['overlay-text-black']}>
            Visita de los jóvenes de Jaén. La programación en la mañana será en el Parque la Paloma.
            <br />
            Fecha: 17 de Junio
          </div>
        </ImageContainer>
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

export const Page7 = memo(Page7Component);
