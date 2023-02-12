import React, {memo} from 'react';
import {SEL} from 'utils';
import 'pages/css/page.css';
import {IASD3} from 'assets/img';
import {
  Container,
  Content,
  Logo,
  NameText,
  NormalText,
  SideTextContainer,
  SubContent,
  SubTitleText,
  TitleText,
} from 'pages/css/styled-components';

const Page21Component = (): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <Logo src={IASD3} alt="Logo IASD" />
        <SubContent>
          <SideTextContainer>
            <TitleText>Conferencia: El Mundo que me vence</TitleText>
            <NormalText>18 de Marzo - 17:30 horas</NormalText>
            <NormalText>Iglesia Fuengirola</NormalText>
            <NameText>Hno. Medardo Ramos</NameText>
          </SideTextContainer>
        </SubContent>
        <SubTitleText>Fuengirola</SubTitleText>
      </Content>
    </Container>
  );
};

export const Page21 = memo(Page21Component);
