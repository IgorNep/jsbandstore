import { cartItemsSelector, cartLoadingSelector } from './cartSelectors';

const mockCartItems = [{ id: 1, title: 'Some book' }];
const dummyState = {
  cart: {
    cartItems: mockCartItems,
    loading: true,
  },
};

describe('should return appropriate selectors', () => {
  test('should return appropriate value from cart items selector', () => {
    expect(cartItemsSelector(dummyState)).toEqual(mockCartItems);
  });
  test('should return appropriate value from cart loading selector', () => {
    expect(cartLoadingSelector(dummyState)).toEqual(true);
  });
  test('should NOT return appropriate value from cart loading selector', () => {
    expect(cartLoadingSelector(dummyState)).not.toEqual(false);
  });
});
