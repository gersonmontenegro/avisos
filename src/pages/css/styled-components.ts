import styled from 'styled-components';
import {colors} from 'utils';

export const Logo = styled.img`
  width: 30%;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
  width: props.width,
  height: props.height,
}))`
  display: flex;
`;

export const Container = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const SubContent = styled.div`
  text-align: center;
  flex-direction: row;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: ${(props) => props.theme.pageBackground ?? colors.white};
  border: 10px solid ${colors.lightgray};
  width: 1300px;
  height: 900px;
`;

export const SubContentVertical = styled.div`
  display: flex;
  width: 900px;
  height: 600px;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme.pageBackground ?? colors.white};
  border: 10px solid ${colors.lightgray};
`;

export const SideTextContainer = styled.div`
  background-color: transparent;
  width: 1000px;
  height: 900px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const TitleOverImage = styled.div`
  position: absolute;
  top: 30px;
  color: black;
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  width: 1300px;
  font-family: 'OswaldBold';
  justify-content: center;
`;

export const TitleOverImageBottom = styled.div`
  position: absolute;
  bottom: 230px;
  color: ${(props) => props.theme.bottomTitle ?? colors.black};
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  width: ${(props) => props.theme.titleOverBottomWidth ?? ' 1300px'};
  font-family: 'OswaldBold';
`;

export const TitleOverImageBottomSide = styled.div`
  position: absolute;
  bottom: 70px;
  color: ${(props) => props.theme.bottomTitle ?? colors.black};
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  width: ${(props) => props.theme.titleOverBottomWidth ?? ' 1300px'};
  font-family: 'OswaldBold';
`;

export const ImageOverImageBottom = styled.div`
  position: absolute;
  // width: 500px;
  justify-content: flex-start;
  top: 30em;
  left: -23em;
`;

export const SideTextContainerVertical = styled.div`
  background-color: transparent;
  width: 900px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

export const NormalText = styled.h4`
  width: 500px;
  font-size: 2rem;
  font-family: Verdana;
  font-family: 'OswaldRegular';
  font-weight: ${(props) => props.itemType ?? 'normal'};
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.color ?? 'black'};
`;

export const NormalTextBold = styled.h4`
  width: 500px;
  font-size: 2.5rem;
  font-family: 'OswaldBold';
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.color ?? 'black'};
`;

export const NormalTextBoldVertical = styled.h4`
  width: 900px;
  font-size: 2.5rem;
  font-family: 'OswaldBold';
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.color ?? 'black'};
`;

export const TitleText = styled.h1`
  width: 650px;
  font-size: 5rem;
  font-family: 'OswaldBold';
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.color ?? 'black'};
`;

export const SubTitleText = styled.h3`
  font-family: OswaldRegular;
  font-weight: 300;
  font-size: 3rem;
  padding: 0px;
  margin: 0px;
`;

export const SubTitleBoldText = styled.h3`
  font-family: OswaldBold;
  font-weight: 300;
  font-size: 3rem;
  padding: 0px;
  margin: 0px;
`;

export const NameText = styled.h3`
  width: 500px;
  font-size: 2.5rem;
  font-family: Verdana;
  color: black;
  font-family: 'OswaldBold';
  margin: 0;
  padding: 0;
`;

export const FrameContainer = styled.div`
  background-color: ${colors.white};
  border: 6px solid #a46400;
  border-radius: 5px;
  margin: 10px;
  width: 90%;
`;

export const TodayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin: 10px;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color ?? colors.white};
  font-weight: bold;
  font-size: 5rem;
  font-family: 'OswaldBold';
  font-color: ${colors.blue};
  transform: rotate(-30deg);
  margin-bottom: 2rem;
`;
