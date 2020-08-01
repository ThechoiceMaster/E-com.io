import {
    GET_PRODUCT_FETCHING,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILED,
    server,
  } from "../constants";
  import { httpClient } from "../utils/HttpClient";
  
  export const setGetToFet = () => ({
    type: GET_PRODUCT_FETCHING,
  });
  export const setGetToSuc = (payload) => ({
    type: GET_PRODUCT_SUCCESS,
    payload,
  });
  export const setGetToFai = () => ({
    type: GET_PRODUCT_FAILED,
  });
  
  export const getProduct = () => {
    return async (dispatch) => {
      dispatch(setGetToFet());
      try {
        let result = await httpClient.get(server.GET_URL);
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
  