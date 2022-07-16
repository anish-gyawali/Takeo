import * as types from "./types";
import { getUserData } from "../api";

export function userApiError(error) {
  return { type: types.USER_API_ERROR, data: error };
}

export function userApiLoading() {
  return { type: types.USER_API_LOADING };
}

export function userApiSuccess(error) {
  return { type: types.USER_API_SUCCESS, data };
}

export function userApiAction() {
  return (dispatch) => {
    dispatch(userApiLoading());
    getUserData()
      .then((data) => {
        console.log(data);
        setToken(data?.login?.uuid);
        localStorage.setItem("token", data?.login?.uuid);
        dispatch(userApiSuccess(data));
      })
      .catch((err) => {
        dispatch(userApiError(err));
      });
  };
}
