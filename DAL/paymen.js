import { invokeApi } from "../bl_libs/invokeApi";

export const _book_flight = async (data) => {
  const requestObj = {
    path: `api/flight/book_flight`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _confirm_booking = async (data) => {
  const requestObj = {
    path: `api/flight/booking/confirm`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _booking_list = async () => {
  const requestObj = {
    path: `api/flight/booking/list/member`,
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};
