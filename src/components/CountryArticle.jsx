import React, { useEffect, useState } from "react";
import "./CountryArticle.scss";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../AppContext/AppContext";
import { FaArrowLeft } from "react-icons/fa";

function CountryArticle({ setParams }) {
  const { countries } = useGlobalContext();
  const { name } = useParams();

  useEffect(() => {
    setParams(name);
  }, []);

  return (
    <>
      <Link to="/">
        <button className="backtohome--btn">
          <FaArrowLeft
            size={"1.5rem"}
            className="btn-icon"
          />
          Back
        </button>
      </Link>
      {countries
        .filter((country) => country.name === name)
        .map((item) => {
          return (
            <div
              className="article__country"
              key={item.name}
            >
              <div className="article__country--img">
                <img
                  src={item.flags.svg}
                  alt=""
                />
              </div>

              <div className="article__country--details">
                <h2 className="country--name">{item.name}</h2>

                <div className="more__details">
                  <section className="details__container">
                    <p className="country--detail">
                      Native Name:
                      <span>{item.nativeName}</span>
                    </p>
                    <p className="country--detail">
                      Population:
                      <span>{item.population}</span>
                    </p>

                    <p className="country--detail">
                      Region:
                      <span>{item.region}</span>
                    </p>

                    <p className="country--detail">
                      Sub Region:
                      <span>{item.subregion}</span>
                    </p>
                    <p className="country--detail">
                      Capital:
                      <span>{item.capital}</span>
                    </p>
                  </section>

                  <section className="details__container">
                    <p className="country--detail">
                      Top Level Domain:
                      <span>{item.topLevelDomain}</span>
                    </p>
                    <p className="country--detail">
                      Currencies:
                      {item.currencies.map((currency, idx) => {
                        return <span key={idx}> {currency.code}</span>;
                      })}
                    </p>
                    <p className="country--detail">
                      Languages:
                      {item.languages.map((language, idx) => {
                        return <span key={idx}> {language.name}</span>;
                      })}
                    </p>
                  </section>
                </div>

                <section className="border__details">
                  <h3 className="">Border Countries:</h3>
                  <div className="borders__container">
                    {item.borders ? (
                      item.borders.map((border) => {
                        return (
                          <p
                            className="border__country"
                            key={border}
                          >
                            {border}
                          </p>
                        );
                      })
                    ) : (
                      <h1>no brders</h1>
                    )}
                  </div>
                </section>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default CountryArticle;
