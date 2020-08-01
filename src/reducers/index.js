import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import addProductReducer from "./add.reducer";
import getProductReducer from "./get.reducer";
export default combineReducers({
  loginReducer,
  addProductReducer,
  getProductReducer
});
