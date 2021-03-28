import React from 'react';
import { render } from '@testing-library/react';
import WrapperForModal from 'components/common/WrapperForModal';

it('check Wrapper For Modal Render', () => {
  render(
    <WrapperForModal>
      <div />
    </WrapperForModal>
  );
});
