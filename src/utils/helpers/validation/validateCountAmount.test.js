import {
  validateCountAmount,
  validateCountOnLimit,
} from './validateCountAmount';

const countInStock = 4;

describe('should validate if input value in between 0 and amount in stock', () => {
  test('should return true because input value equal to count in stock', () => {
    const inputValue = 4;
    expect(validateCountAmount(inputValue, countInStock)).toBeTruthy();
  });
  test('should return true because input value in between to count in stock and 0', () => {
    const inputValue = 3;
    expect(validateCountAmount(inputValue, countInStock)).toBeTruthy();
  });

  test('should return false because input value more than amount in stock', () => {
    const inputValue = 5;
    expect(validateCountAmount(inputValue, countInStock)).toBeFalsy();
  });
});

describe('should validate if input value more than we have in stock', () => {
  test('should return true because input value more than we have in stock', () => {
    const inputValue = 5;
    expect(validateCountOnLimit(inputValue, countInStock)).toBeTruthy();
  });
  test('should return false because input value less than we have in stock', () => {
    const inputValue = 3;
    expect(validateCountOnLimit(inputValue, countInStock)).toBeFalsy();
  });
  test('should return false because input value equal than we have in stock', () => {
    const inputValue = 4;
    expect(validateCountOnLimit(inputValue, countInStock)).toBeFalsy();
  });
});
