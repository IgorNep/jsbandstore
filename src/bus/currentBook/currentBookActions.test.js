import {
  getBookById,
  getBookByIdFail,
  getBookByIdSuccess,
  getBookByIdRequest,
} from './currentBookActions';
import {
  BOOK_GET_BY_ID_FAIL,
  BOOK_GET_BY_ID_REQUEST,
  BOOK_GET_BY_ID_SUCCESS,
} from './currentBookTypes';

describe('actions', () => {
  test('should create action to make request', () => {
    const expectedAction = {
      type: BOOK_GET_BY_ID_REQUEST,
    };
    expect(getBookByIdRequest()).toEqual(expectedAction);
  });
  test('should create action to get books successfully ', () => {
    const expectedAction = {
      type: BOOK_GET_BY_ID_SUCCESS,
      payload: { id: 1, title: 'some book' },
    };
    expect(getBookByIdSuccess({ id: 1, title: 'some book' })).toEqual(
      expectedAction
    );
  });
  test('should create action to get books with fail ', () => {
    const expectedAction = {
      type: BOOK_GET_BY_ID_FAIL,
      payload: 'some error message',
    };
    expect(getBookByIdFail({ message: 'some error message' })).toEqual(
      expectedAction
    );
  });
});

describe('function with multiple actions ', () => {
  const action = getBookById();
  const mockDispatchFn = jest.fn();
  test('mockDispatch should be called 2 times', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn).toHaveBeenCalledTimes(2);
  });
  test('first mockDispatch should be called with  appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).toEqual({
      type: BOOK_GET_BY_ID_REQUEST,
    });
  });
});
