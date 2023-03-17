import React, {memo, useState} from 'react';
import {HeaderTitleText} from 'components/css/styled-slides-components';

interface NextSaturdayType {
  day: number;
  month: string;
}

const HeaderComponent = (): JSX.Element => {
  const capitalizeFirstLetter = (word: string): string => {
    if (word.length === 0 || typeof word !== 'string') {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getNextSaturdayDate = (): NextSaturdayType => {
    const todayDate = new Date();
    const monthName = new Intl.DateTimeFormat('es-ES', {month: 'long'}).format(todayDate);

    const currentDayOfWeek = todayDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const daysUntilNextSaturday = (7 - currentDayOfWeek + 6) % 7; // Calculate the number of days until the next Saturday

    const nextSaturday = new Date(todayDate);
    nextSaturday.setDate(todayDate.getDate() + daysUntilNextSaturday);

    return {
      day: nextSaturday.getDate(),
      month: capitalizeFirstLetter(monthName),
    };
  };

  const {day, month} = getNextSaturdayDate();

  return <HeaderTitleText>{`Anuncios para hoy, ${day} de ${month}`}</HeaderTitleText>;
};

export const HeaderTitle = memo(HeaderComponent);
