import React, { useContext, useState } from "react";
import { _get_user_from_localStorage } from "../DAL/localStorage/localStorage";

const CreateContentContext = React.createContext();
const _get_user_info = _get_user_from_localStorage();

export const useContentContext = () => useContext(CreateContentContext);
export function ContentContextState({ children }) {
  const [userInfo, setUserInfo] = useState(_get_user_info);

  const handleUserInfo = (val) => {
    setUserInfo(val);
  };

  const collection = {
    userInfo,
    handleUserInfo,
    setUserInfo,
  };

  return (
    <CreateContentContext.Provider value={collection}>
      {children}
    </CreateContentContext.Provider>
  );
}
