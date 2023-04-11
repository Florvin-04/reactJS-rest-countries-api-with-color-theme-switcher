import React, { useState, useContext, useEffect, createContext } from "react";
import data from "/data.json";
const allRegions = ["All", ...new Set(data.map((country) => country.region))];

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [options, setOptions] = useState(
    allRegions.map((item) => ({
      value: item,
      label: item,
    }))
  );

  return (
    <AppContext.Provider
      value={{
        options,
        allRegions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
