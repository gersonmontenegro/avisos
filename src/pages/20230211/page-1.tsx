import React, {memo} from 'react';
import {SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {IASD3} from 'assets/img';
import {
  Container,
  Content,
  Logo,
  NormalText,
  SideTextContainer,
  SubContent,
  SubTitleText,
  TitleText,
} from 'pages/css/styled-components';

const Page1Component = (): JSX.Element => {
  console.log('CSS', styles);

  return (
    <Container className={SEL}>
      <Content>
        <Logo src={IASD3} alt="Logo IASD" />
        <SubContent>
          <video width="640" height="352" controls>
            <source src="videos/sevilla.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <SideTextContainer className={styles['.white-background']}>
            <TitleText>60 Plus - Sevilla</TitleText>
            <NormalText>Del 23 al 26 de Marzo</NormalText>
          </SideTextContainer>
        </SubContent>
        <SubTitleText>Fuengirola</SubTitleText>
      </Content>
    </Container>
  );
};

export const Page1 = memo(Page1Component);
