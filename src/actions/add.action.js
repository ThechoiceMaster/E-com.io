import {
  ADD_PRODUCT_FETCHING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  server,
} from "../constants";
import { httpClient } from "../utils/HttpClient";

export const setAddToFet = () => ({
  type: ADD_PRODUCT_FETCHING,
});
export const setAddToSuc = (payload) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload,
});

export const setAddToFai = () => ({
  type: ADD_PRODUCT_FAILED,
});

export const addProduct = ({ username, name, stock, price, img, detail }) => {
  return async (dispatch) => {
    dispatch(setAddToFet());
    try {
      let result = await httpClient.post(server.ADD_URL, {
        username,
        name,
        stock,
        price,
        img,
        detail,
      });
      if (result !== null) {
        dispatch(setAddToSuc(result));
      } else {
        dispatch(setAddToFai());
      }
    } catch (error) {
      dispatch(setAddToFai(console.log("เชื่อมต่อไม่สำเร็จ")));
    }
  };
};
