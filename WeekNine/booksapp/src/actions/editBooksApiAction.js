import * as types from "./types";
import { getData } from "../api";
import { GET_BOOK_BY_ID } from "../api/urls";
//import { BOOKS_API_ERROR, BOOKS_API_LOADING, BOOKS_API_SUCCESS } from "./types";

export function editBooksApiError(error) {
  return { type: types.EDIT_BOOKS_API_ERROR, data: error };
}

export function editBooksApiSuccess(data) {
  return { type: types.EDIT_BOOKS_API_SUCCESS, data };
}

export function editBooksApiLoading() {
  return { type: types.EDIT_BOOKS_API_LOADING };
}

export function editBooksApiAction(id) {
  return (dispatch) => {
    let getBookUrl = GET_BOOK_BY_ID.replace("{id}", id);
    dispatch(editBooksApiLoading());
    getData(getBookUrl)
      .then((data) => {
        console.log(data, "inside then");
        dispatch(editBooksApiSuccess(data));
      })
      .catch((err) => {
        dispatch(editBooksApiError(err));
      });
  };
}
