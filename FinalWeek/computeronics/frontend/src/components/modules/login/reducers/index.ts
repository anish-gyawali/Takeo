import * as types from "../actions/types";
import { ActionModel } from "../../../../common/models";
export default function loginReducer(state = {}, action: ActionModel) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.data;
    case types.LOGIN_ERROR:
      return action.data;
    case types.LOGIN_LOADING:
      return { loading: true };
    case types.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
