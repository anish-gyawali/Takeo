import { combineReducers } from "redux";
import showBooksReducer from "../reducers/showBooksReducer";

const rootReducer = combineReducers({
  showBooks: showBooksReducer,
});
export default rootReducer;
