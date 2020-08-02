import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_STATUS,
  LOGOUT,
  server,
} from "../constants";
import { httpClient } from "../utils/HttpClient";
export const setFetchingLogin = () => ({
  type: LOGIN_FETCHING,
});

export const setSuccessLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setFailedLogin = () => ({
  type: LOGIN_FAILED,
});
export const setStateToLogout = () => ({
  type: LOGOUT
});


export const login = ({ username, password, history }) => {
  return async (dispatch) => {
    dispatch(setFetchingLogin());
    try {
      let result = await httpClient.post(server.LOGIN_URL, { username, password });
      if (result !== null) {
        dispatch(setSuccessLogin(result.data));
        localStorage.setItem(LOGIN_STATUS, "ok");
        history.push("/");
      } else {
        dispatch(setFailedLogin());
        localStorage.setItem(LOGIN_STATUS, "nok");
      }
    } catch (error) {
      dispatch(setFailedLogin(console.log("เชื่อมต่อไม่สำเร็จ")));
    }
  };
};

export const isLoggedIn = () => {
  const loginStatus = localStorage.getItem(LOGIN_STATUS);
  return loginStatus === "ok";
};

export const reLogin = () => {
  return dispatch => {
    const loginStatus = localStorage.getItem(LOGIN_STATUS);
    if (loginStatus === "ok") {
      dispatch(setSuccessLogin({}));
    }
  };
};

export const logout = ({ history }) => {
  return dispatch => {
    localStorage.removeItem(LOGIN_STATUS);
    dispatch(setStateToLogout());
    history.push("/");
  };
};