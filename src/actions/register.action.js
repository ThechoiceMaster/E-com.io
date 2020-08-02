import {
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  server,
} from "../constants";
import { httpClient } from "../utils/HttpClient";
export const setFetchingRegister = () => ({
  type: REGISTER_FETCHING,
});

export const setSuccessRegister = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const setFailedRegister = () => ({
  type: REGISTER_FAILED,
});

export const register = ({ username, password, history, email }) => {
  return async (dispatch) => {
    dispatch(setFetchingRegister());
    try {
      let result = await httpClient.post(server.REGISTER_URL, {
        username,
        password,
        email,
      });
      if (result.data.message === "สมัคสมาชิกสำเร็จแล้ว") {
        dispatch(setSuccessRegister());
        history.push("/login");
      } else {
        dispatch(setFailedRegister());
      }
    } catch (error) {
      dispatch(setFailedRegister(console.log("เชื่อมต่อไม่สำเร็จ")));
    }
  };
};
