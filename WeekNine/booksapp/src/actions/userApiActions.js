import * as types from "./types";
import { getUserData } from "../api";
//import { USER_API_ERROR, USER_API_LOADING, USER_API_SUCCESS } from "./types";

export function userApiError(error) {
  return { type: types.USER_API_ERROR, data: error };
}

export function userApiSuccess(data) {
  return { type: types.USER_API_SUCCESS, data };
}

export function userApiLoading() {
  return { type: types.USER_API_LOADING };
}

export function userApiAction() {
  return (dispatch) => {
    dispatch(userApiLoading());
    getUserData()
      .then((data) => {
        console.log(data, "Diapatch action");
        localStorage.setItem("token", data?.login?.uuid);
        dispatch(userApiSuccess(data));
      })
      .catch((err) => {
        dispatch(userApiError(err));
      });
  };
}
