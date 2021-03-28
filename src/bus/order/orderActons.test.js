import {
  ORDER_CREATE_REQUSET,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_RESET,
} from './orderTypes';
import {
  createOrder,
  createOrderFail,
  createOrderRequest,
  createOrderSuccess,
  resetOrderInfo,
} from './orderActions';

describe('actions', () => {
  test('should create action to make order request', () => {
    const expectedAction = {
      type: ORDER_CREATE_REQUSET,
    };
    expect(createOrderRequest()).toEqual(expectedAction);
  });
  test('should create action to make order successfully', () => {
    const expectedAction = {
      type: ORDER_CREATE_SUCCESS,
      payload: 'Thank you for your order!',
    };
    expect(createOrderSuccess('Thank you for your order!')).toEqual(
      expectedAction
    );
  });
  test('should create action to make order with failure', () => {
    const mockError = {
      message: 'Some error!',
    };
    const expectedAction = {
      type: ORDER_CREATE_FAIL,
      payload: mockError.message,
    };
    expect(createOrderFail(mockError)).toEqual(expectedAction);
  });
  test('should create action to reset order state', () => {
    const expectedAction = {
      type: ORDER_RESET,
    };
    expect(resetOrderInfo()).toEqual(expectedAction);
  });
});

describe('function with multiple actions ', () => {
  const books = [
    { id: 12, title: 'book12' },
    { id: 14, title: 'book14' },
  ];
  const action = createOrder(books);
  const mockDispatchFn = jest.fn();
  const mockGetSTate = jest.fn();
  test('mockDispatch should be called 2 times', () => {
    action(mockDispatchFn, mockGetSTate);
    expect(mockDispatchFn).toHaveBeenCalledTimes(2);
  });

  test('mockGetState should be called 1 times', () => {
    action(mockDispatchFn, mockGetSTate);
    expect(mockGetSTate).toHaveBeenCalledTimes(1);
  });

  test('first mockDispatch should be called with  appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).toEqual({
      type: ORDER_CREATE_REQUSET,
    });
  });
});
