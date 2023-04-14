import React, { useState, useContext, useEffect, createContext } from "react";
import data from "/data.json";
const allRegions = ["All", ...new Set(data.map((country) => country.region))];

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const [searchCountry, setSearchCountry] = useState("");
  const [searchByRegion, setSearchByRegion] = useState("All");
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  function filterData() {
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
  }

  useEffect(() => {
    // setLoading(true);
    // let updateList = [...data];

    // if (searchByRegion === "All") {
    //   updateList = updateList.filter((country) =>
    //     country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
    //   );
    //   setCountries(updateList);
    //   setLoading(false);
    // } else {
    //   updateList = updateList.filter(
    //     (country) => country.region.toLowerCase() === searchByRegion.toLocaleLowerCase()
    //   );

    //   updateList = updateList.filter((country) =>
    //     country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
    //   );
    //   setCountries(updateList);
    //   setLoading(false);
    // }
    filterData();
  }, [searchCountry, searchByRegion]);

  // const handleScroll = () => {
  //   const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //   if (scrollTop + clientHeight >= scrollHeight - 20) {
  //     // Detect when scrolled to the bottom of the page with 20px offset
  //     fetchData();
  //     console.log("hi");
  //   }
  // };

  // function fetchData() {
  //   setLoading(true);

  //   // Simulate fetching data from data.json
  //   const start = (currentPage - 1) * 10;
  //   const end = start + 10;
  //   const newData = showDatas.slice(start, end);

  //   setCountries((prevData) => [...prevData, ...newData]);
  //   setCurrentPage((prevPage) => prevPage + 1);
  //   setLoading(false);

  //   console.log();
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   // return () => {
  //   //   window.removeEventListener("scroll", handleScroll);
  //   // };
  // }, []);

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
        setLoading,
        toggle,
        setToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
