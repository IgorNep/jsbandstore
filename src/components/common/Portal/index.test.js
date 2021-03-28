import React from 'react';
import { render } from '@testing-library/react';
import Portal from 'components/common/Portal';

it('check Portal Render', () => {
  render(
    <Portal>
      <div />
    </Portal>
  );
});
