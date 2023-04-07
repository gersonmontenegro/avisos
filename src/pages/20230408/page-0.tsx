import React, {memo, useMemo} from 'react';
import {colors, SEL} from 'utils';
import 'pages/css/page.css';
import styles from 'pages/css/page1.module.css';
import {LogoNuevo, SemanaOracion} from 'assets/img';
import {
  Container,
  Content,
  FrameContainer,
  Logo,
  NormalText,
  NormalTextBold,
  SideTextContainer,
  SubContent,
  SubTitleText,
  TitleText,
} from 'pages/css/styled-components';
import {MainTitle} from 'components/css/styled-slides-components';
import {ThemeProvider} from 'styled-components';
import {HeaderTitle} from 'components/shared/header';

const textTheme = {
  color: colors.black,
};

const Page0Component = (): JSX.Element => {
  return (
    <ThemeProvider theme={textTheme}>
      <Container className={SEL}>
        <Content>
          <MainTitle bkColor="#003867">
            <HeaderTitle />
          </MainTitle>
          <Logo src={LogoNuevo} alt="Logo IASD" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export const Page0 = memo(Page0Component);
