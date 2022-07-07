import { SHOW_BOOKS } from "./types";

export function showBooks(isShowBooks) {
  return { type: SHOW_BOOKS, data: isShowBooks };
}
