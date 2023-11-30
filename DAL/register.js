import { invokeApi } from "../bl_libs/invokeApi";

export const _signup_customer = async (data) => {
  const requestObj = {
    path: `api/member/signup`,
    method: "POST",
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

// export const _code_verification = async (data) => {
//   const requestObj = {
//     path: `api/app_api/code_verification`,
//     method: "POST",
//     headers: {
//       "x-sh-auth": "",
//     },
//     postData: data,
//   };
//   return invokeApi(requestObj);
// };

// export const _email_verification = async (data) => {
//   const requestObj = {
//     path: `api/app_api/email_verification`,
//     method: "POST",
//     headers: {
//       "x-sh-auth": "",
//     },
//     postData: data,
//   };
//   return invokeApi(requestObj);
// };

// export const _reset_password = async (data) => {
//   const requestObj = {
//     path: `api/app_api/reset_password`,
//     method: "POST",
//     headers: {
//       "x-sh-auth": "",
//     },
//     postData: data,
//   };
//   return invokeApi(requestObj);
// };

// export const _contact_us = async (data) => {
//   const requestObj = {
//     path: `api/app_api/contact_us`,
//     method: "POST",
//     postData: data,
//   };
//   return invokeApi(requestObj);
// };

// export const _website_web_api = async () => {
//   const requestObj = {
//     path: `api/init/page_content_setting?page=home`,
//     method: "GET",
//   };
//   return invokeApi(requestObj);
// };

// export const _website_home_api = async () => {
//   const requestObj = {
//     path: `api/website_settings/website_home_api`,
//     method: "GET",
//   };
//   return invokeApi(requestObj);
// };

// export const _page_content_setting = async (page_slug) => {
//   const requestObj = {
//     path: `api/init/page_content_setting?page=${page_slug}`,
//     method: "GET",
//   };
//   return invokeApi(requestObj);
// };

// export const _detail_product = async (menu_slug) => {
//   const requestObj = {
//     path: `api/product/detail_product/${menu_slug}`,
//     method: "GET",
//   };
//   return invokeApi(requestObj);
// };

// export const _product_filter_list = async (data) => {
//   const requestObj = {
//     path: `api/product/product_filter`,
//     method: "POST",

//     postData: data,
//   };
//   return invokeApi(requestObj);
// };

// export const _webite_quest_user = async () => {
//   const requestObj = {
//     path: `api/init/webite_quest_user`,
//     method: "GET",
//   };
//   return invokeApi(requestObj);
// };

// export const _add_proceed_order = async (data) => {
//   const requestObj = {
//     path: `api/order_proceed/add_proceed_order`,
//     method: "POST",
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//     postData: data,
//   };
//   return invokeApi(requestObj);
// };

// export const _get_user_profile = async () => {
//   const requestObj = {
//     path: `api/customer/get_user_profile`,
//     method: "GET",
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _edit_customer = async (data) => {
//   const requestObj = {
//     path: `api/customer/edit_customer`,
//     method: "PUT",
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//       "Content-Type": "multipart/form-data",
//     },
//     postData: data,
//   };
//   return invokeApi(requestObj);
// };

// export const _list_shipping = async () => {
//   const requestObj = {
//     path: `api/shipping_price/list_shipping_price`,
//     method: "GET",
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _list_cart = async () => {
//   const requestObj = {
//     path: `api/cart/list_cart`,
//     method: "GET",
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _add_to_cart = async (data) => {
//   const requestObj = {
//     path: `api/cart/add_to_cart`,
//     method: "POST",
//     postData: data,
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _delete_from_cart = async (data) => {
//   const requestObj = {
//     path: `api/cart/delete_from_cart`,
//     method: "POST",
//     postData: data,
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _product_review = async (data) => {
//   const requestObj = {
//     path: `api/product_review/add_product_review_for_web`,
//     method: "POST",
//     postData: data,
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _clear_cart = async () => {
//   const requestObj = {
//     path: `api/cart/clear_cart`,
//     method: "GET",
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _detail_proceed_order = async (data) => {
//   const requestObj = {
//     path: `api/order_proceed/detail_proceed_order`,
//     method: "POST",
//     postData: data,
//     headers: {
//       "x-sh-auth": localStorage.getItem("token"),
//     },
//   };
//   return invokeApi(requestObj);
// };

// export const _whats_on_stock = async () => {
//   const requestObj = {
//     path: `api/product/whats_on_stock_for_web`,
//     method: "GET",
//   };
//   return invokeApi(requestObj);
// };
