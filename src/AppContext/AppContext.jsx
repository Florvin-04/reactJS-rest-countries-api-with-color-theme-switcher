import React, { useState, useContext, useEffect, createContext } from "react";
import data from "/data.json";
import countries from "../components/countries";
const allRegions = ["All", ...new Set(data.map((country) => country.region))];

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchByRegion, setSearchByRegion] = useState("All");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setCountries(data);
  // }, []);

  useEffect(() => {
    setLoading(true);
    let updateList = [...data];

    if (searchByRegion === "All") {
      updateList = updateList.filter((country) =>
        country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
      );
      setCountries(updateList);
      setLoading(false);
    } else {
      updateList = updateList.filter(
        (country) => country.region.toLowerCase() === searchByRegion.toLocaleLowerCase()
      );

      updateList = updateList.filter((country) =>
        country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
      );
      setCountries(updateList);
      setLoading(false);
    }
  }, [searchCountry, searchByRegion]);

  return (
    <AppContext.Provider
      value={{
        countries,
        allRegions,
        searchCountry,
        setSearchCountry,
        searchByRegion,
        setSearchByRegion,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
