import React from 'react';
import { render } from '@testing-library/react';
import CartTable from './index';

const cartItems = [
  { id: 1, title: 'some title', price: 12, count: 2, quantity: 12 },
];
it('check Book Details Item Render', () => {
  render(<CartTable cartItems={cartItems} />);
});
