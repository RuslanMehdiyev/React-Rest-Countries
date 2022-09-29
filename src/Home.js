import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import List from "./components/List";
import "./css/style.css";
import Details from "./Pages/Details";
import { ClimbingBoxLoader } from "react-spinners";

function Home() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [region, setRegion] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setItem(data);
        setRegion(data.map((e) => e.region));
      });
  }, []);
  // console.log(data);

  // console.log([...unique]);

  // console.log(region);

  const handleInput = (e) => {
    if (e.target.value.length === 0) {
      setItem(data);
    } else {
      setItem(
        data.filter((a) =>
          a.name.common.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const getRegion = (e) => {
    if (e.target.value === "all") {
      setItem(data);
    } else {
      setItem(data.filter((a) => a.region === e.target.value));
    }
  };

  const unique = new Set(region);
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="col-12">
            <div className="row justify-content-end align-items-center">
              <div className="col-3">
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  className="form-control"
                  placeholder="search for a country..."
                />
              </div>
              <div className="col-3">
                {
                  <select
                    name="filter"
                    id="filter"
                    className="form-control"
                    onChange={(e) => getRegion(e)}
                  >
                    <option value="all">All</option>
                    {[...unique].map((e, b) => (
                      <option key={b} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="col-12">
            <div className="row">
              {item.length > 0 ? (
                item.map((index, key) => <List key={key} index={index} />)
              ) : (
                <div className="loading">
                  <div className="loadingContent">
                    <ClimbingBoxLoader color="#ff2000" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/detail" element={<Details />} />
      </Routes>
    </>
  );
}

export default Home;
