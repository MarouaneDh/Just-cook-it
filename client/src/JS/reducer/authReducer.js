import {
  LOGIN_USER,
  LOGOUT,
  GET_AUTH_USER,
  AUTH_ERROR,
  REGISTER_USER,
  SET_LOADING,
} from "../constant/actionTypes";

const initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  isLoading: false,
  msg: null,
  errors: [],
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        isAuth: false,
      };
    case LOGIN_USER:
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, isLoading: false, isAuth: true, ...payload };
    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
