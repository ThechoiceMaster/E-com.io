import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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

export const login = ({ name, password, history }) => {
  return async (dispatch) => {
    dispatch(setFetchingLogin());
    try {
      let result = await httpClient.post(server.LOGIN_URL, { name, password });
      if (result !== null) {
        dispatch(setSuccessLogin(result));
        history.push("/");
      } else {
        dispatch(setFailedLogin());
      }
    } catch (error) {
      dispatch(setFailedLogin(console.log("เชื่อมต่อไม่สำเร็จ")));
    }
  };
};
