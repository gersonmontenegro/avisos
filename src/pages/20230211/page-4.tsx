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

const Page4Component = (): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <Logo src={IASD3} alt="Logo IASD" />
        <SubContent>
          <SideTextContainer>
            <TitleText>Estudio de la Palabra de Dios</TitleText>
            <NormalText>Cada Viernes a las 20:00 horas</NormalText>
            <NormalText>Presencial / Zoom</NormalText>
          </SideTextContainer>
          <img src="img/bible.jpeg" width={576} height={324} />
        </SubContent>
        <SubTitleText>Fuengirola</SubTitleText>
      </Content>
    </Container>
  );
};

export const Page4 = memo(Page4Component);
