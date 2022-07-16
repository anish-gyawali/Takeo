import * as types from "../actions/types";

export default function userApiReducer(state = {}, action) {
  switch (action.types) {
    case types.USER_API_LOADING:
      return { loading: true };
    case types.USER_API_SUCCESS:
      return action.data;
    case types.USER_API_ERROR:
      return action.data;
    default:
      return state;
  }
}
