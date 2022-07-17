import * as types from "./types";
import { postData } from "../api";
import { POST_BOOK } from "../api/urls";
//import { BOOKS_API_ERROR, BOOKS_API_LOADING, BOOKS_API_SUCCESS } from "./types";

export function postBooksApiError(error) {
  return { type: types.POST_BOOKS_API_ERROR, data: error };
}

export function postBooksApiSuccess(data) {
  return { type: types.POST_BOOKS_API_SUCCESS, data };
}

export function postBooksApiLoading() {
  return { type: types.POST_BOOKS_API_LOADING };
}

export function postBooksApiAction(bookData, id) {
  return (dispatch) => {
    dispatch(postBooksApiLoading());
    postData(POST_BOOK, bookData, id)
      .then((data) => {
        // console.log(data, "inside then");
        dispatch(postBooksApiSuccess(data));
      })
      .catch((err) => {
        dispatch(postBooksApiError(err));
      });
  };
}
