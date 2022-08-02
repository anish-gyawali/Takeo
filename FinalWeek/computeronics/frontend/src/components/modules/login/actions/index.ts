import * as types from "./types";
import { LoginPayloadModel } from "../models";
import { fetchDataAsync } from "../../../../api";
import { GET_USER } from "../../../../api/urls";
export const loginLoadingAction = () => ({ type: types.LOGIN_LOADING });
export const loginSuccessAction = (data: any) => ({
  type: types.LOGIN_SUCCESS,
  data,
});
export const logoutSuccessAction = () => ({
  type: types.LOGOUT_SUCCESS,
});
export const loginErrorAction = () => ({ type: types.LOGIN_ERROR });

export const getUserApiAction = (): any => {
  const fetchDataInfo = {
    relURL: GET_USER,
  };
  return async (dispatch: any) => {
    try {
      const response = await fetchDataAsync(fetchDataInfo);
      if (response?.data?._id) {
        dispatch(loginSuccessAction(response.data));
      }
    } catch (err) {
      console.log();
    }
  };
};

export const loginApiAction = (url: string, data: LoginPayloadModel): any => {
  const fetchDataInfo = {
    relURL: url,
    data,
    method: "POST",
  };
  return async (dispatch: any) => {
    try {
      const response = await fetchDataAsync(fetchDataInfo);
      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        dispatch(getUserApiAction());
      }
    } catch (err) {
      console.log();
    }
  };
};
