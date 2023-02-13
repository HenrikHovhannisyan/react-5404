import React, { memo } from "react";
import "./latestCar.css";
import Car from "../car/Car";
import { cars } from "../../config/data";
import { Link } from "react-router-dom";

const LatestCar = () => {
  return (
    <section id="latestCar">
      <div className="container-fluid max_width">
        <h2 className="section_title">The latest car releases</h2>

        <div className="latestCar_container">
          <div className="row">
            {cars.map((car) => {
              return (
                <div key={car.id} className="col-12 col-sm-6 col-lg-3">
                  <Car img={car.img} name={car.name} price={car.price} />
                </div>
              );
            })}
          </div>
          <div className="text-end">
            <Link to='/cars' className="btn latestCar_btn">Show more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LatestCar);
