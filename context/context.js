import React, { useContext, useState } from "react";

const myContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [isNav, setIsNav] = useState(false);
  return (
    <myContext.Provider value={{ isNav, setIsNav }}>
      {children}
    </myContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(myContext);
};

export { ContextProvider, useGlobalContext };
