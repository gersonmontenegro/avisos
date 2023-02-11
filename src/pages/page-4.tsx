import React, {memo} from 'react';
import {SEL} from '../utils';
import styled from 'styled-components';
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
  height: 324;
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

const LogoContainer = styled.div`
  width: 232px;
  height: 217px;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
`;

const SubTitleText = styled.h3`
  width: 500px;
  font-family: OswaldRegular;
  font-weight: 300;
  font-size: 3rem;
  padding: 0;
  margin: 0;
`;

const Page4Component = (): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <LogoContainer>
          <img src="img/iasd3.png" width={232} height={217} />
        </LogoContainer>
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
