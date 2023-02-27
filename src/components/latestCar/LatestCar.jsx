import React, { memo, useEffect, useState } from "react";
import "./latestCar.css";
import Car from "../car/Car";
import { Link } from "react-router-dom";
import { CAR_LIST } from "../../config/api";
import axios from "axios";

const LatestCar = () => {
  const [data, setData] = useState();
  const cars = [];
  let count = 0;

  useEffect(() => {
    axios
      .get(CAR_LIST)
      .then((res) => {
        setData(res.data.results.sort((a, b) => a.price - b.price));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  cars.push(data);
  count = Math.floor(Math.random() * cars[0]?.length) + 1 - 8;

  return (
    <section id="latestCar">
      <div className="container-fluid max_width">
        <h2 className="section_title">The latest car releases</h2>

        <div className="latestCar_container">
          <div className="row">
            {cars[0] &&
              cars[0].slice(count, count + 8).map((car) => {
                return (
                  <div key={car.id} className="col-12 col-sm-6 col-lg-3">
                    <Car
                      img={car.image}
                      name={car.canonical_mmt}
                      price={car.price}
                    />
                  </div>
                );
              })}
          </div>
          <div className="text-end">
            <Link to="/cars" className="btn latestCar_btn">
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LatestCar);
