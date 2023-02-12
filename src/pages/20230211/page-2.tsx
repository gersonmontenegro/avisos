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

const Page2Component = (): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <Logo src={IASD3} alt="Logo IASD" />
        <SubContent>
          <SideTextContainer>
            <TitleText>Cena de parejas</TitleText>
            <NormalText>18 de Marzo</NormalText>
          </SideTextContainer>
          <img src="img/cena.png" width={472} height={570} />
        </SubContent>
        <SubTitleText>Fuengirola</SubTitleText>
      </Content>
    </Container>
  );
};

export const Page2 = memo(Page2Component);
