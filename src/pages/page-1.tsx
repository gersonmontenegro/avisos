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
  background-color: white;
  width: 500px;
  height: 352px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const NormalText = styled.h4`
  width: 500px;
  font-size: 2rem;
  font-family: Verdana;
  color: gray;
  font-family: 'OswaldRegular';
  padding: 0;
  margin: 0;
`;

const TitleText = styled.h1`
  width: 500px;
  font-size: 3rem;
  font-family: 'OswaldBold';
  padding: 0;
  margin: 0;
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

const Page1Component = (): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <LogoContainer>
          <img src="img/iasd3.png" width={232} height={217} />
        </LogoContainer>
        <SubContent>
          <video width="640" height="352" controls>
            <source src="videos/sevilla.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <SideTextContainer>
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
