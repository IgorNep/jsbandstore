import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGOUT_REQUEST,
} from './userTypes';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        error: null,
        loading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        userInfo: null,
        loading: false,
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userLoginReducer;
