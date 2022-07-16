import { combineReducers } from "redux";
import showBooksReducer from "../reducers/showBooksReducer";
import userApiReducer from "../reducers/userApiReducer";

const rootReducer = combineReducers({
  showBooks: showBooksReducer,
  user: userApiReducer,
});
export default rootReducer;
