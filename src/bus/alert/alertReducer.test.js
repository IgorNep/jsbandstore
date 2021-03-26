import alertReducer from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from './alretTypes';

const initialState = null;
describe('alert should appear and dissappear', () => {
  const alertSample = { message: 'This is alert', type: 'success' };
  test('alert should be shown and value should not be equal to null', () => {
    expect(
      alertReducer(initialState, {
        type: SHOW_ALERT,
        payload: alertSample,
      })
    ).toEqual(alertSample);
  });

  test('alert should be equal to null', () => {
    expect(alertReducer(initialState, { type: HIDE_ALERT })).toEqual(null);
  });
});

describe('alert reducer should return appropriate state', () => {
  test('should return initial state when input not existing type', () => {
    const newState = alertReducer(initialState, {
      type: 'NOT_EXISTING_TYPE',
      payload: 'not existing payload',
    });
    expect(newState).toEqual(initialState);
  });
  test('should NOT return initial state when input not existing type', () => {
    const newState = alertReducer(initialState, {
      type: SHOW_ALERT,
      payload: 'some payload',
    });
    expect(newState).not.toEqual(initialState);
  });
});
