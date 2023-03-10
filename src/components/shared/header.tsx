import React, {memo} from 'react';
import {HeaderTitleText} from 'components/css/styled-slides-components';

const HeaderComponent = (): JSX.Element => {
  return <HeaderTitleText>Anuncios para hoy, 11 de Marzo</HeaderTitleText>;
};

export const HeaderTitle = memo(HeaderComponent);
