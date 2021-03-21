import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from './userTypes';

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
        loading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userLoginReducer;
