import {
  loginUserRequest,
  loginUserFail,
  loginUserSuccess,
  loginUser,
  logoutUser,
  logoutUserRequest,
  logoutUserSuccess,
} from './userActions';

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_REQUEST,
} from './userTypes';

describe('user login actions', () => {
  test('should create action to make user login request', () => {
    const expectedAction = {
      type: USER_LOGIN_REQUEST,
    };
    expect(loginUserRequest()).toEqual(expectedAction);
  });
  test('should create action to make user login success', () => {
    const expectedAction = {
      type: USER_LOGIN_SUCCESS,
      payload: { id: 1, username: 'John' },
    };
    expect(loginUserSuccess({ id: 1, username: 'John' })).toEqual(
      expectedAction
    );
  });
  test('should create action to make user login fail', () => {
    const mockError = { message: 'Some error' };
    const expectedAction = {
      type: USER_LOGIN_FAIL,
      payload: mockError.message,
    };
    expect(loginUserFail(mockError)).toEqual(expectedAction);
  });
  test('should create action to make user logout request', () => {
    const expectedAction = {
      type: USER_LOGOUT_REQUEST,
    };
    expect(logoutUserRequest()).toEqual(expectedAction);
  });
  test('should create action to make user logout request', () => {
    const expectedAction = {
      type: USER_LOGOUT_REQUEST,
    };
    expect(logoutUserRequest()).toEqual(expectedAction);
  });
  test('should create action to make user logout success', () => {
    const expectedAction = {
      type: USER_LOGOUT,
    };
    expect(logoutUserSuccess()).toEqual(expectedAction);
  });
});

describe('functions with multiple actions', () => {
  jest.useFakeTimers();

  const action = logoutUser();
  const mockDispatchFn = jest.fn();

  test('setTimeout should be called  1 time', () => {
    action(mockDispatchFn);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  test('should be called setTimeout in 500 ms', () => {
    action(mockDispatchFn);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });
  test('should NOT be called setTimeout in 1000 ms', () => {
    action(mockDispatchFn);
    expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('mock dispatch should NOT  be called with appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).not.toEqual({
      type: USER_LOGIN_REQUEST,
    });
  });
  test('mock dispatch should be called with appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).toEqual({
      type: USER_LOGOUT_REQUEST,
    });
  });
});

describe('function loginUser with multiple actions ', () => {
  const username = 'Arnold';
  const action = loginUser(username);
  const mockDispatchFn = jest.fn();

  test('mockDispatch should be called 2 times', async () => {
    await action(mockDispatchFn);
    expect(mockDispatchFn).toHaveBeenCalledTimes(2);
  });

  test('first mockDispatch should be called with  appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).toEqual({
      type: USER_LOGIN_REQUEST,
    });
  });
});
