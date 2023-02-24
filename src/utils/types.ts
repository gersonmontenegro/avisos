export enum Keys {
  ArrowDown = 'ArrowDown',
  Enter = 'Enter',
  ArrowUp = 'ArrowUp',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
}
export interface Colors {
  pink: string;
  white: string;
  black: string;
  lightgreen: string;
  lightgray: string;
  lightblue: string;
  lightred: string;
  blue: string;
}

export declare type TestableProps<T> = T & {testID: string};

export type PageProps = TestableProps<{
  title: string;
}>;
