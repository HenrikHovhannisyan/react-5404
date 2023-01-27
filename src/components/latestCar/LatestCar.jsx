import React from "react";
import "./latestCar.css";
import Car from "../car/Car";
import { cars } from "../../data";

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
            <button className="btn latestCar_btn">Show more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCar;
