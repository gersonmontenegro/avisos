import React, {memo} from 'react';
import {SEL} from 'utils';
import 'pages/css/page.css';
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

const Page3Component = (): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <Logo src={IASD3} alt="Logo IASD" />
        <SubContent>
          <img src="img/familia.png" width={538} height={578} />
          <SideTextContainer>
            <TitleText>Programa para la familia</TitleText>
            <NormalText>Sábado 25 de Febrero</NormalText>
            <NormalText>17:00 horas</NormalText>
          </SideTextContainer>
        </SubContent>
        <SubTitleText>Fuengirola</SubTitleText>
      </Content>
    </Container>
  );
};

export const Page3 = memo(Page3Component);
