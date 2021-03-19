import sum from './sumFunc';

describe('Sum function', () => {
  test('should return sum of 2 and 2 equal 4 ', () => {
    expect(sum(2, 2)).toBe(4);
  });
  test('should NOT return sum of 2 and 2 equal 4 ', () => {
    expect(sum(2, 3)).not.toBe(4);
  });
});
