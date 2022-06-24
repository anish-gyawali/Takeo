import { BACKEND_DOMAIN } from "../config";

export const postData = async (url, data) => {
  const res = await fetch(`${BACKEND_DOMAIN}${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getData = async (url) => {
  const res = await fetch(`${BACKEND_DOMAIN}${url}`);
  const data = await res.json();
  return data;
};
