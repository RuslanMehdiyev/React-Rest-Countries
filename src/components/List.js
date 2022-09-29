import React from "react";
import {NavLink} from "react-router-dom"

function List({index}) {
  return (
    <>
      <div className="col-3 mt-5">
        <div className="card">
          <img src={index.flags.png} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{index.name.common}</h5>
            <p className="card-text">Population: {index.population}</p>
            <p>Region: {index.region}</p>
            <p>Capital: {index.capital}</p>
          </div>
          <NavLink to={`${index.cca2}`} className="btn btn-success">Read More</NavLink>
        </div>
      </div>
    </>
  );
}

export default List;
