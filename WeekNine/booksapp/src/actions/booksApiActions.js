import * as types from "./types";
import { getData } from "../api";
import { GET_BOOKS } from "../api/urls";
//import { BOOKS_API_ERROR, BOOKS_API_LOADING, BOOKS_API_SUCCESS } from "./types";

export function booksApiError(error) {
  return { type: types.BOOKS_API_ERROR, data: error };
}

export function booksApiSuccess(data) {
  return { type: types.BOOKS_API_SUCCESS, data };
}

export function booksApiLoading() {
  return { type: types.BOOKS_API_LOADING };
}

export function booksApiAction() {
  return (dispatch) => {
    dispatch(booksApiLoading());
    getData(GET_BOOKS)
      .then((data) => {
        console.log(data, "inside then");
        dispatch(booksApiSuccess(data));
      })
      .catch((err) => {
        dispatch(booksApiError(err));
      });
  };
}
