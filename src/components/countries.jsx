import React, { useEffect } from "react";
import "./countries.scss";
import Country from "./country";
import { useGlobalContext } from "../AppContext/AppContext";

function countries({ setParams }) {
  const { countries, loading } = useGlobalContext();

  useEffect(() => {
    setParams(null);
  }, []);

  if (loading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <div className="countries">
      {countries.length !== 0 ? (
        countries.map((country) => {
          return (
            <Country
              key={country.name}
              {...country}
            />
          );
        })
      ) : (
        <p>no country found</p>
      )}
      {/* {countries.map((country) => {
        return (
          <Country
            key={country.name}
            {...country}
          />
        );
      })} */}
    </div>
  );
}

export default countries;
