import { invokeApi } from "../bl_libs/invokeApi";

export const _airports_list = async () => {
  const requestObj = {
    path: `api/airport/get_airport_list/active`,
    method: "GET",
    headers: {
      //   "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};
