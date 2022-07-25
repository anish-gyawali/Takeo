import { BACKEND_DOMAIN } from "../config";
export const fetchDataAsync = async (fetchInfo: any) => {
  const URL = `${BACKEND_DOMAIN}/${fetchInfo.relURL}`;
  const { data } = fetchInfo;
  try {
    const response = await fetch(URL, {
      method: fetchInfo.method,
      body: data ? JSON.stringify(data) : null,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response;
  } catch (err) {
    return { error: true };
  }
};
export default fetchDataAsync;
