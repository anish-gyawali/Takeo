import { combineReducers } from "redux";
import loginReducer from "../components/modules/login/reducers";

const rootReducer = combineReducers({
  loginData: loginReducer,
});

export default rootReducer;
