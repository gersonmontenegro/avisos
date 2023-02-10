import React, {memo} from 'react';

const Page1Component = (): JSX.Element => {
  return (
    <div>
      <h1>Page!!!</h1>
    </div>
  );
};

export const Page1 = memo(Page1Component);
