export enum Keys {
  ArrowDown = 'ArrowDown',
  Enter = 'Enter',
  ArrowUp = 'ArrowUp',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
}

export declare type TestableProps<T> = T & {testID: string};

export type PageProps = TestableProps<{
  title: string;
}>;
