import React, { useEffect } from "react";
import "./countries.scss";
import Country from "./country";
import { useGlobalContext } from "../AppContext/AppContext";
import LoadingStateSkeleton from "./loadingStateSkeleton";
function countries({ setParams }) {
  const { countries, loading } = useGlobalContext();

  useEffect(() => {
    setParams(null);
  }, []);

  return (
    <div className="countries">
      {/* {loading && <LoadingStateSkeleton cardsNum={8} />} */}
      {countries.length !== 0 ? (
        countries.map((country, idx) => {
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
      {loading && <LoadingStateSkeleton cardsNum={8} />}
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
