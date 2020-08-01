import { GET_PRODUCT_FETCHING, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILED } from "../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };

    case GET_PRODUCT_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };

    case GET_PRODUCT_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };

    default:
      return state;
  }
};
