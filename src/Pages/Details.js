import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import "../css/style.css";

function Details() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState([]);
  const [check2, setCheck2] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  useEffect(() => {
    data.map((e) => setCheck(Object.keys(e.currencies)));
  }, [data]);

  useEffect(() => {
    data.map((e) => setCheck2(Object.keys(e.languages)));
  }, [data]);

  console.log(data);
  return (
    <>
      <div className="container mt-5">
        {data.length > 0 ? (
          data.map((index, key) => (
            <div className="row" key={key}>
              <div className="col-6">
                <img
                  width={"100%"}
                  height={"100%"}
                  src={index?.flags.png}
                  alt={index?.name.common}
                />
              </div>
              <div className="col-6">
                <h1>{index.name.common}</h1>
                <div className="row">
                  <div className="col-6">
                    <p>Population: {index.population}</p>
                    <p>Region: {index.region}</p>
                    <p>Sub Region: {index.subregion}</p>
                    <p>Capital: {index.capital}</p>
                  </div>
                  <div className="col-6">
                    <p>Top Level Domain: {index.tld}</p>
                    <p>
                      Currencies:
                      {check.map((a, b) => (
                        <span key={b}> {index.currencies[a]?.name}</span>
                      ))}
                    </p>
                    <p>
                      Languages:
                      {check2.map((a, b) => (
                        <span key={b}> {index.languages[a]}</span>
                      ))}
                    </p>
                  </div>
                </div>
                <h4>
                  Border countries:
                  {index?.borders?.length > 0
                    ? index.borders?.map((e, i) => (
                        <Link
                          to={`/${e}`}
                          className="btn btn-primary m-1"
                          key={i}
                        >
                          {e}
                        </Link>
                      ))
                    : " No borders"}
                </h4>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">
            <div className="loadingContent">
              <ClimbingBoxLoader color="#ff2000" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Details;
