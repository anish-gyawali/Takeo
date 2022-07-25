import * as types from "./types";

export const loginLoadingAction = () => ({ type: types.LOGIN_LOADING });
export const loginSuccessAction = () => ({ type: types.LOGIN_SUCCESS });
export const loginErrorAction = () => ({ type: types.LOGIN_ERROR });

export const loginApiAction = () => {
  return (dispatch: any) => {
    dispatch(loginErrorAction());
  };
};
