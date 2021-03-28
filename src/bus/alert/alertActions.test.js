import { hideAlert, showAlert, setAlert } from './alertActions';
import { HIDE_ALERT, SHOW_ALERT } from './alretTypes';

const alertObj = {
  title: 'some alert',
  type: 'success',
};
const expectedShowAlertAction = {
  type: SHOW_ALERT,
  payload: alertObj,
};

const expectedHideAlertAction = {
  type: HIDE_ALERT,
};
describe('actions', () => {
  test('should create an action to hide alert', () => {
    expect(hideAlert()).toEqual(expectedHideAlertAction);
  });
  test('should create an action to show alert', () => {
    expect(showAlert(alertObj)).toEqual(expectedShowAlertAction);
  });
});

describe('setAlert with setTimeout', () => {
  jest.useFakeTimers();

  const action = setAlert(alertObj);
  const mockDispatchFn = jest.fn();

  test('setTimeout should be called  1 time', () => {
    action(mockDispatchFn);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  test('should be called setTimeout in 2000 ms', () => {
    action(mockDispatchFn);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
  test('should be called setTimeout in 1000 ms', () => {
    const newAction = setAlert(alertObj, 1000);
    newAction(mockDispatchFn);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  test('should NOT called setTimeout in 1000 ms', () => {
    const newAction = setAlert(alertObj);
    newAction(mockDispatchFn);
    expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  test('mock dispatch should be called with appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).toEqual({
      type: SHOW_ALERT,
      payload: alertObj,
    });
  });
});
