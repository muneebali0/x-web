const _get_user_from_localStorage = () => {
  if (typeof window !== "undefined") {
    const user_profile = localStorage.getItem("user_info");
    if (
      user_profile &&
      user_profile !== undefined &&
      user_profile !== "undefined" &&
      user_profile !== null
    ) {
      return JSON.parse(localStorage.getItem("user_info"));
    } else {
      return {};
    }
  }
};

module.exports = {
  _get_user_from_localStorage,
};
