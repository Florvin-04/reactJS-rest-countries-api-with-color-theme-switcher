import React, { useEffect, useState } from "react";
import "./countries.scss";
import Country from "./country";
import { useGlobalContext } from "../AppContext/AppContext";
import LoadingStateSkeleton from "./loadingStateSkeleton";

import InfiniteScroll from "react-infinite-scroll-component";

function countries({ setParams }) {
  const { countries, loading, setLoading } = useGlobalContext();

  const [displayCountries, setDisplayCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    const newData = countries.slice(0, 10);
    setDisplayCountries([...newData]);
  }, [countries]);

  function fetchData() {
    setLoading(true);
    const start = (currentPage - 1) * 10;
    const end = start + 10;
    const newData = countries.slice(start, end);

    setTimeout(() => {
      setDisplayCountries((prevData) => [...prevData, ...newData]);
      setCurrentPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, [3000]);
  }

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayCountries]);

  useEffect(() => {
    setParams(null);
  }, []);

  return (
    <div className="countries">
      {displayCountries.length !== 0 ? (
        displayCountries.map((country, idx) => {
          return (
            <Country
              key={idx}
              {...country}
            />
          );
        })
      ) : (
        <LoadingStateSkeleton cardsNum={8} />
      )}

      {loading && <LoadingStateSkeleton cardsNum={4} />}
    </div>
  );
}

export default countries;
