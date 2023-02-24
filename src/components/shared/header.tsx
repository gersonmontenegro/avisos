import React, {memo} from 'react';
import {HeaderTitleText} from 'components/css/styled-slides-components';

const HeaderComponent = (): JSX.Element => {
  console.log('HEADER!!!');
  return <HeaderTitleText>Avisos para hoy, 25 de Febrero</HeaderTitleText>;
};

export const HeaderTitle = memo(HeaderComponent);
