// common business logic related util methods
import axios from "axios";
import { apiBaseUrl } from "../config/config";

axios.defaults.headers.post["Content-Type"] = "application/json";
export async function invokeApi({
  path,
  method = "GET",
  headers = {},
  queryParams = {},
  postData = {},
}) {
  const reqObj = {
    method,
    url: apiBaseUrl + path,
    headers,
  };

  reqObj.params = queryParams;

  if (method === "POST") {
    reqObj.data = postData;
  }
  if (method === "PUT") {
    reqObj.data = postData;
  }
  if (method === "DELETE") {
    reqObj.data = postData;
  }

  let results;
  if (postData instanceof FormData) {
    reqObj.headers = { ...headers, "Content-Type": "multipart/form-data" };
    console.log(...postData, "<===REQUEST-DATA===>");
  }
  console.log(reqObj, "<===REQUEST-OBJECT===>");

  try {
    results = await axios(reqObj);
    console.log(results.data, "--API SUCCESS");
    return results.data;
  } catch (error) {
    console.log(error.response, "--API ERROR");

    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }

    return {
      code: error.response.status,
      message: error.response.data.message ? error.response.data.message : "",
    };
  }
}
