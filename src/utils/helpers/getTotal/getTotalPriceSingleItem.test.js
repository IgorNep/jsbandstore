import getTotalPriceSingleItem from './getTotalPriceSingleItem';

const bookItem = {
  id: 1,
  price: 2,
  quantity: 4,
};
const bookItem2 = {
  id: 2,
  price: 1,
  quantity: 5,
};

describe('function should calculate total count of items', () => {
  test('function should return total price = 8', () => {
    const totalPrice = getTotalPriceSingleItem(bookItem);
    expect(totalPrice).toBe('8.00');
  });
  test('function should return total price = 8', () => {
    const totalPrice = getTotalPriceSingleItem(bookItem2);
    expect(totalPrice).not.toBe('8.00');
  });
});
