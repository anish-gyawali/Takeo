import * as types from "../actions/types";
export default function editBooksApiReducer(state = [], action) {
  switch (action.type) {
    case types.EDIT_BOOKS_API_LOADING:
      return { loading: true };
    case types.EDIT_BOOKS_API_SUCCESS:
      return action.data;
    case types.EDIT_BOOKS_API_ERROR:
      return action.data;
    default:
      return state;
  }
}
