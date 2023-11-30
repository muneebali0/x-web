import { invokeApi } from "../bl_libs/invokeApi";

export const _add_flight = async (data) => {
  const requestObj = {
    path: `api/flight/add`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _flights_list_for_website = async (data) => {
  const requestObj = {
    path: `api/flight/list/for_website`,
    method: "POST",
    headers: {
      // "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _pilot_flights_list = async () => {
  const requestObj = {
    path: `api/flight/list-by-pilot`,
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};

export const _pilot_flights_delete = async (flight_id) => {
  const requestObj = {
    path: `api/flight/delete/${flight_id}`,
    method: "DELETE",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};

export const _pilot_flights_detail = async (flight_id) => {
  const requestObj = {
    path: `api/flight/get/${flight_id}`,
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};

export const _update_flight = async (data, flight_id) => {
  const requestObj = {
    path: `api/flight/update/${flight_id}`,
    method: "PUT",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _login_customer = async (data) => {
  const requestObj = {
    path: `api/member/login`,
    method: "POST",
    postData: data,
  };
  return invokeApi(requestObj);
};
