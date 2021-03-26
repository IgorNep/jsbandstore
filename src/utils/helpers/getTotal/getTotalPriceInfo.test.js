import getTotalPriceInfo from './getTotalPriceInfo';

const cartItems = [
  {
    id: 1,
    price: 2,
    quantity: 4,
  },
  {
    id: 2,
    price: 10,
    quantity: 0,
  },
  {
    id: 3,
    price: 1,
    quantity: 2,
  },
];

describe('function should calculate total count of items', () => {
  test('function should return total price = 10', () => {
    const totalPrice = getTotalPriceInfo(cartItems);
    expect(totalPrice).toBe('10.00');
  });
  test('function should NOT return quantity = 6', () => {
    cartItems.push({ id: 4, quantity: 1, price: 22 });
    const totalPrice = getTotalPriceInfo(cartItems);
    expect(totalPrice).not.toBe('10.00');
  });
  test('function should return total price = 8', () => {
    const newCartItems = cartItems.filter(
      (item) => item.id !== 3 && item.id !== 4
    );
    const totalPrice = getTotalPriceInfo(newCartItems);
    expect(totalPrice).toBe('8.00');
  });
});
