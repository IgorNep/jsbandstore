import orderReducer from './orderReducer';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUSET,
  ORDER_CREATE_SUCCESS,
  ORDER_RESET,
} from './orderTypes';

const initialState = {
  message: null,
  error: null,
  loading: null,
};

describe('order state loading should change depends of actions', () => {
  test('loading should be set to true', () => {
    const newState = orderReducer(initialState, { type: ORDER_CREATE_REQUSET });
    expect(newState.loading).toEqual(true);
  });
  test('loading should be set to false', () => {
    const newState = orderReducer(initialState, { type: ORDER_CREATE_SUCCESS });
    expect(newState.loading).toEqual(false);
  });
  test('loading should be set to false', () => {
    const newState = orderReducer(initialState, { type: ORDER_CREATE_FAIL });
    expect(newState.loading).toEqual(false);
  });
  test('loading should be set to false', () => {
    const newState = orderReducer(initialState, { type: ORDER_RESET });
    expect(newState.loading).toEqual(false);
  });
});

describe('order message and error should be set to appropriate value', () => {
  const stateSample = { message: 'Well done!', loading: false, error: false };
  test('message should be set to truthy value', () => {
    const newState = orderReducer(initialState, {
      type: ORDER_CREATE_SUCCESS,
      payload: 'Fantastic job!',
    });
    expect(newState.message).toBeTruthy();
  });
  test('message should be set to falsy value', () => {
    const newState = orderReducer(initialState, {
      type: ORDER_CREATE_FAIL,
      payload: 'Error appeared!',
    });
    expect(newState.message).toBeFalsy();
  });
  test('message should be set to falsy value', () => {
    const newState = orderReducer(stateSample, {
      type: ORDER_RESET,
    });
    expect(newState.message).toBeFalsy();
  });
  test('error value should be set to truthy value', () => {
    const newState = orderReducer(initialState, {
      type: ORDER_CREATE_FAIL,
      payload: 'some error',
    });
    expect(newState.error).toBeTruthy();
  });
  test('error value should be set to falsy value', () => {
    const newState = orderReducer(initialState, {
      type: ORDER_CREATE_SUCCESS,
      payload: 'some success',
    });
    expect(newState.error).toBeFalsy();
  });
  test('error value should be set to falsy value', () => {
    const newState = orderReducer(initialState, {
      type: ORDER_RESET,
    });
    expect(newState.error).toBeFalsy();
  });
});

describe('order reducer should return appropriate state', () => {
  test('should return initial state when input not existing type', () => {
    const newState = orderReducer(initialState, {
      type: 'NOT_EXISTING_TYPE',
      payload: 'not existing payload',
    });
    expect(newState).toEqual(initialState);
  });
  test('should NOT return initial state when input not existing type', () => {
    const newState = orderReducer(initialState, {
      type: ORDER_CREATE_SUCCESS,
      payload: 'not existing payload',
    });
    expect(newState).not.toEqual(initialState);
  });
});
