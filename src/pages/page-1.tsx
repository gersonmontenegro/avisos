import React, {memo} from 'react';
import {SEL, type TestableProps} from '../utils';
import styled from 'styled-components';
import LogoIASD from '../assets/img/iasd2.png';

type PageProps = TestableProps<{
  title: string;
}>;

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
`;

const TitleText = styled.h1`
  width: 500px;
  font-size: 3rem;
  font-family: Verdana;
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
  background-color: red;
`;

const SubTitleText = styled.h3`
  width: 500px;
  font-family: 'Times New roman';
  font-weight: 300;
  font-size: 3rem;
  padding: 0;
  margin: 0;
`;

const Page1Component = ({title}: PageProps): JSX.Element => {
  return (
    <Container className={SEL}>
      <Content>
        <Logo />
        <SubContent>
          <video width="640" height="352" controls>
            <source src="videos/sevilla.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <SideTextContainer>
            <TitleText>{title}</TitleText>
            <NormalText>Del 23 al 26 de Marzo</NormalText>
          </SideTextContainer>
        </SubContent>
        <SubTitleText>Fuengirola</SubTitleText>
      </Content>
    </Container>
  );
  // return (
  //   <div key={title} className={SEL}>
  //     <h1>{title}</h1>
  //   </div>
  // );
};

export const Page1 = memo(Page1Component);
