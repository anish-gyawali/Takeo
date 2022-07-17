import { combineReducers } from "redux";
import booksApiReducer from "../reducers/booksApiReducer";
import showBooksReducer from "../reducers/showBooksReducer";
import userApiReducer from "../reducers/userApiReducer";

const rootReducer = combineReducers({
  showBooks: showBooksReducer,
  user: userApiReducer,
  books: booksApiReducer,
});
export default rootReducer;
