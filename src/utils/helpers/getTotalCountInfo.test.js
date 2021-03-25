import getTotalCountInfo from './getTotalCountInfo';

const cartItems = [
  {
    id: 1,
    quantity: 4,
  },
  {
    id: 2,
    quantity: 0,
  },
  {
    id: 3,
    quantity: 2,
  },
];

describe('function should calculate total count of items', () => {
  test('function should return quantity = 6', () => {
    const count = getTotalCountInfo(cartItems);
    expect(count).toBe(6);
  });
  test('function should NOT return quantity = 6', () => {
    cartItems.push({ id: 4, quantity: 1 });
    const count = getTotalCountInfo(cartItems);
    expect(count).not.toBe(6);
  });
});
