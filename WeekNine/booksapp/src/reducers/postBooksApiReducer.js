import * as types from "../actions/types";
export default function postBooksApiReducer(state = [], action) {
  switch (action.type) {
    case types.POST_BOOKS_API_LOADING:
      return { loading: true };
    case types.POST_BOOKS_API_SUCCESS:
      return action.data;
    case types.POST_BOOKS_API_ERROR:
      return action.data;
    default:
      return state;
  }
}
