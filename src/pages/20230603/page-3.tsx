import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, CadenaOracion} from 'assets/img';
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
} from 'pages/css/styled-components';
import {ThemeProvider} from 'styled-components';

const textTheme = {
  color: colors.black,
};

const Page3Component = (): JSX.Element => {
  const sideA = useMemo(() => {
    return (
      <div>
        <ImageContainer className={styles['image-container']}>
          <img src={CadenaOracion} height={900} />
          <div className={styles['overlay-short-text-top-left']}>
            La Iglesia de Fuengirola está unida en oración:
          </div>
          <div
            className={`${styles['overlay-short-text-left-align']} ${styles['right-bottom-title']}`}>
            1. Por un nuevo local para la iglesia
            <br />
            2. Por la predicación del Evangelismo en Fuengirola.
            <br />
            3. Por los líderes que serán elegidos para el próximo año Eclesiástico
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

export const Page3 = memo(Page3Component);
