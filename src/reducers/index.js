import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import addProductReducer from "./add.reducer";
import getProductReducer from "./get.reducer";
import getProfileReducer from "./get.reducer";
import registerReducer from "./register.reducer"
export default combineReducers({
  loginReducer,
  addProductReducer,
  getProductReducer,
  getProfileReducer,
  registerReducer
});
