import { BACKEND_DOMAIN } from "../config";
export const postData = async (url, data, id) => {
  let newUrl = `${BACKEND_DOMAIN}${url}`;
  if (id) {
    newUrl = `${newUrl}/${id}`;
  }
  const resp = await fetch(newUrl, {
    method: id ? "PUT" : "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const resdata = await resp.json();
  return resdata;
};
export const getData = async (url) => {
  const resp = await fetch(`${BACKEND_DOMAIN}${url}`);
  const data = await resp.json();
  return data;
};

export const getUserData = async () => {
  const resp = await fetch(`https://api.randomuser.me/`);
  const data = await resp.json();
  return data?.results[0];
};
