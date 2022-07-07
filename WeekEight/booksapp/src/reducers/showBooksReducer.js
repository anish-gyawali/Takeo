import { SHOW_BOOKS } from "../actions/types";
export default function showBooksReducer(state = {}, action) {
  switch (action.types) {
    case SHOW_BOOKS:
      return action.data;
    default:
      return state;
  }
}
