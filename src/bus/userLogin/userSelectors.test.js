import {
  userInfoSelector,
  loadingSelector,
  errorSelector,
} from './userSelectors';

const mockError = 'Some mock error';
const mockUserInfo = { username: 'John', avatar: 'someurl', token: '123' };
const dummyState = {
  userLogin: {
    userInfo: mockUserInfo,
    error: mockError,
    loading: true,
  },
};

describe('should return appropriate selectors', () => {
  test('should return appropriate value from userinfo selector', () => {
    expect(userInfoSelector(dummyState)).toEqual(mockUserInfo);
  });
  test('should return appropriate value from loading selector', () => {
    expect(loadingSelector(dummyState)).toEqual(true);
  });
  test('should return appropriate value from error selector', () => {
    expect(errorSelector(dummyState)).toEqual(mockError);
  });
  test('should return appropriate value from error selector', () => {
    dummyState.userLogin.loading = false;
    expect(errorSelector(dummyState)).not.toEqual(true);
  });
});
