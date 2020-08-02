import { GET_PROFILE_FETCHING, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from "../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };

    case GET_PROFILE_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };

    case GET_PROFILE_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };

    default:
      return state;
  }
};
