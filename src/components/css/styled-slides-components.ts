import styled, {type ThemedStyledProps} from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const shouldForwardProp = (
  prop: string | number,
  defaultValidatorFn: (prop: string | number) => boolean,
): boolean => {
  return prop !== 'bkColor' && isPropValid(prop as string);
};

interface CustomDivProps {
  bkColor?: string;
}

export const MainTitle = styled.div.withConfig({
  shouldForwardProp,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ThemedStyledProps<CustomDivProps, Record<string, unknown>>) =>
    props.bkColor ?? 'lightgray'};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitleText = styled.h1`
  font-size: 5rem;
  font-family: 'OswaldBold';
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  background-color: #cdcdcd;
`;
