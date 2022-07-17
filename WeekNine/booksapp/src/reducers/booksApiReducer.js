import * as types from "../actions/types";
export default function booksApiReducer(state = [], action) {
  switch (action.type) {
    case types.BOOKS_API_LOADING:
      return { loading: true };
    case types.BOOKS_API_SUCCESS:
      return action.data;
    case types.BOOKS_API_ERROR:
      return action.data;
    default:
      return state;
  }
}
