import sum from './sumFunc';

describe('Sum function', () => {
  test('should not return 6', () => {
    expect(sum(2, 3)).not.toBe(6);
  });
  test('should not return 6', () => {
    expect(sum(3, 3)).toBe(6);
  });
});
