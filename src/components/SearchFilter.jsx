import React, { useState, useEffect } from "react";
import "./SearchFilter.scss";
import { useGlobalContext } from "../AppContext/AppContext";

import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

function SearchFilter() {
  const { allRegions, searchCountry, setSearchCountry, searchByRegion, setSearchByRegion } =
    useGlobalContext();

  const [region, setRegion] = useState("Filter by Region");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(region);
  }, [region]);

  const theme = "dark";
  return (
    <div className="filters__container">
      <form className="search__form">
        <label
          htmlFor="search__country"
          className="search__container"
        >
          <input
            type="text"
            name="country"
            id="search__country"
            placeholder=""
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
          />
          <span className="input__placeholder">
            <FaSearch />
            <span className="placeholder__name">Search for a country...</span>
          </span>
        </label>
      </form>

      <div>
        <label
          htmlFor="region"
          className="dropdown__region"
        >
          <div
            className="filter__region"
            onClick={() => setToggle((prev) => !prev)}
          >
            {region}
          </div>
          <ul className={`region__list ${toggle == true ? "active" : ""}`}>
            {allRegions.map((item, idx) => {
              return (
                <li
                  className="region__list--item"
                  key={idx}
                  onClick={() => {
                    setRegion(item);
                    setSearchByRegion(item);
                    setToggle(false);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </label>
      </div>
    </div>
  );
}

export default SearchFilter;
