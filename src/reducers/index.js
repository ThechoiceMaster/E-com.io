import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import addProductReducer from "./add.reducer";
export default combineReducers({
  loginReducer,
  addProductReducer,
});
