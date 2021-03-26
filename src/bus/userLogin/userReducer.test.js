import userReducer from './userReducer';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './userTypes';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

describe('user login loading should be set as needed depends of action type', () => {
  test('loading should be set to true', () => {
    const newState = userReducer(initialState, { type: USER_LOGIN_REQUEST });
    expect(newState.loading).toEqual(true);
  });
  test('loading should be set to false', () => {
    const newState = userReducer(initialState, { type: USER_LOGIN_SUCCESS });
    expect(newState.loading).toEqual(false);
  });
  test('loading should be set to false', () => {
    const newState = userReducer(initialState, { type: USER_LOGIN_FAIL });
    expect(newState.loading).toEqual(false);
  });
  test('loading should be set to false', () => {
    const newState = userReducer(initialState, { type: USER_LOGOUT });
    expect(newState.loading).toEqual(false);
  });
});

describe('user login userInfo value should be set as needed depends of action type', () => {
  test('userInfo should be set to truthy value', () => {
    const newState = userReducer(initialState, {
      type: USER_LOGIN_SUCCESS,
      payload: 'some data',
    });
    expect(newState.userInfo).toBeTruthy();
  });
  test('userInfo should be set to falsy value', () => {
    const newState = userReducer(initialState, {
      type: USER_LOGIN_FAIL,
      payload: 'some error',
    });
    expect(newState.userInfo).toBeFalsy();
  });
  test('userInfo should be set to falsy value', () => {
    const newState = userReducer(initialState, { type: USER_LOGOUT });
    expect(newState.userInfo).toBeFalsy();
  });
});

describe('user login error value should be set as needed depends of action type', () => {
  test('error should be set to truthy value', () => {
    const newState = userReducer(initialState, {
      type: USER_LOGIN_FAIL,
      payload: 'some error',
    });
    expect(newState.error).toBeTruthy();
  });
  test('error should be set to falsy value', () => {
    const newState = userReducer(initialState, {
      type: USER_LOGIN_SUCCESS,
      payload: 'some data',
    });
    expect(newState.error).toBeFalsy();
  });
  test('error should be set to falsy value', () => {
    const newState = userReducer(initialState, { type: USER_LOGOUT });
    expect(newState.error).toBeFalsy();
  });
});

describe('user login reducer should return appropriate state', () => {
  test('should return initial state when input not existing type', () => {
    const newState = userReducer(initialState, {
      type: 'NOT_EXISTING_TYPE',
      payload: 'not existing payload',
    });
    expect(newState).toEqual(initialState);
  });
  test('should NOT return initial state when input not existing type', () => {
    const newState = userReducer(initialState, {
      type: USER_LOGIN_SUCCESS,
      payload: 'not existing payload',
    });
    expect(newState).not.toEqual(initialState);
  });
});
