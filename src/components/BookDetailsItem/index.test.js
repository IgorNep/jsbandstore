import React from 'react';
import { render } from '@testing-library/react';
import BookDetailsItem from './index';

const book = {
  title: 'some book',
  author: 'some authoe',
  tags: ['tag1,tag2'],
};
it('check Book Details Item Render', () => {
  render(<BookDetailsItem book={book} />);
});
