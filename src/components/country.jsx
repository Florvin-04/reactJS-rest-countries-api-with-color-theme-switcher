import React from "react";
import "./Country.scss";
import { Link } from "react-router-dom";

function Country(country) {
  //   console.log(country);
  return (
    <Link to={`${country.name}`}>
      <div className="country">
        <img
          src={country.flags.svg}
          alt={country.name}
          className="country__img"
        />

        <div className="country__info">
          <h2 className="country__info--name">{country.name}</h2>
          <p className="country__info--population country--data">
            Population:
            <span> {country.population.toLocaleString()}</span>
          </p>
          <p className="country__info--region country--data">
            Rgion:
            <span> {country.region}</span>
          </p>
          <p className="country__info--capital country--data">
            Capital:
            <span> {country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
