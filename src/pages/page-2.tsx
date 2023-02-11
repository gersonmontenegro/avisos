import React, {memo} from 'react';
import {SEL} from '../utils';
import styled from 'styled-components';
import LogoIASD from '../assets/img/iasd3.png';
// import CenaParejas from '../assets/img/cena.png';
import './page.css';

// type PageProps = TestableProps<{
//   title: string;
// }>;

const Container = styled.div`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const SubContent = styled.div`
  text-align: center;
  flex-direction: row;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const SideTextContainer = styled.div`
  // background-color: white;
  display: flex;
  width: 500px;
  height: 570px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
`;

const NormalText = styled.h4`
  width: 500px;
  font-size: 2rem;
  font-family: Verdana;
  color: black;
  font-family: 'OswaldRegular';
  margin: 0;
  padding: 0;
`;

const TitleText = styled.h1`
  width: 500px;
  font-size: 3rem;
  font-family: 'OswaldBold';
  margin: 0;
  padding: 0;
`;

const Logo = styled.div`
  width: 232px;
  height: 217px;
  background-image: url(${LogoIASD});
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
`;

// const Cena = styled.div`
//   width: 472;
//   height: 570px;
//   background-image: url(${CenaParejas});
//   background-size: 100% 100%;
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   text-align: center;
// `;

const SubTitleText = styled.h3`
  width: 500px;
  font-family: OswaldRegular;
  font-weight: 300;
  font-size: 3rem;
  padding: 0;
  margin: 0;
`;

const Page2Component = (): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <Logo />
        <SubContent>
          <img src="img/cena.png" width={472} height={570} />
          <SideTextContainer>
            <TitleText>Cena de parejas</TitleText>
            <NormalText>18 de Marzo</NormalText>
          </SideTextContainer>
        </SubContent>
        <SubTitleText>Fuengirola</SubTitleText>
      </Content>
    </Container>
  );
};

export const Page2 = memo(Page2Component);
