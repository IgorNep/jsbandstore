import validateLoginInput from './validateLogin';

describe('after validation should return true or false', () => {
  test('should return false because username length > 4 and < 16', () => {
    const username = 'John';
    expect(validateLoginInput(username)).toBeFalsy();
  });

  test('should return true because username length lesss than 4', () => {
    const username = 'Lee';
    expect(validateLoginInput(username)).toBeTruthy();
  });

  test('should return true because username length more than 16', () => {
    const username = 'abcdefghijklmnopqrstu100100';
    expect(validateLoginInput(username)).toBeTruthy();
  });

  test('should return false because username is valid', () => {
    const username = 'Eriksson';
    expect(validateLoginInput(username)).toBeFalsy();
  });
});
