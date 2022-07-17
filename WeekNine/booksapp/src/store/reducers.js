import { combineReducers } from "redux";
import booksApiReducer from "../reducers/booksApiReducer";
import editBooksApiReducer from "../reducers/editBooksApiReducer";
import postBooksApiReducer from "../reducers/postBooksApiReducer";
import showBooksReducer from "../reducers/showBooksReducer";
import userApiReducer from "../reducers/userApiReducer";

const rootReducer = combineReducers({
  showBooks: showBooksReducer,
  user: userApiReducer,
  books: booksApiReducer,
  postBook: postBooksApiReducer,
  editBook: editBooksApiReducer,
});
export default rootReducer;
