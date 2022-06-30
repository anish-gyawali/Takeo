import React, { createContext, useEffect, useState } from "react";
import { getData } from "../../../api";
import { GET_BOOK } from "../../../api/urls";

export const UserContext = createContext({
  data: {},
  setdata: () => {},
});

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      getData(GET_BOOK).then((data) => {
        setData(data);
      });
    }
  }, [data]);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
