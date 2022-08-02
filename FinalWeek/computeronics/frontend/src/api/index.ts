import { BACKEND_DOMAIN } from "../config";
import { FetchDataModel } from "../common/models";
export const fetchDataAsync = async (fetchInfo: FetchDataModel) => {
  const URL = `${BACKEND_DOMAIN}/${fetchInfo.relURL}`;
  const { data } = fetchInfo;
  try {
    const response = await fetch(URL, {
      method: fetchInfo.method ?? "GET",
      body: data ? JSON.stringify(data) : null,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return await response.json();
  } catch (err) {
    return { error: true };
  }
};
export default fetchDataAsync;
