import {
    GET_PROFILE_FETCHING,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    server,
  } from "../constants";
  import { httpClient } from "../utils/HttpClient";
  
  export const setGetToFet = () => ({
    type: GET_PROFILE_FETCHING,
  });
  export const setGetToSuc = (payload) => ({
    type: GET_PROFILE_SUCCESS,
    payload,
  });
  export const setGetToFai = () => ({
    type: GET_PROFILE_FAILED,
  });
  
  export const getProfile = () => {
    return async (dispatch) => {
      dispatch(setGetToFet());
      try {
        let result = await httpClient.post(server.PROFILE_URL_GET);
        if (result !== null) {
          dispatch(setGetToSuc(result.data));
        } else {
          dispatch(setGetToFai());
        }
      } catch (error) {
        dispatch(setGetToFai(console.log("เชื่อมต่อไม่สำเร็จ")));
      }
    };
  };
  