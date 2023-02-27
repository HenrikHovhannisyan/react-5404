import React, { memo } from "react";
import "./car.css";
import CarHeart from "../../assets/img/icons/heart.png";
import noImage from "../../assets/img/no-image.jpg";

const Car = ({ img, name, price }) => {
  return (
    <div className="car">
      <div className="car_img">
        <img src={img || noImage} className="w-100" alt="Car" />
      </div>
      <div className="car_container">
        <h3 className="car_name">{name}</h3>
        <p className="car_price">${price}</p>
        <div className="d-flex">
          <button className="car_show-btn">Show details</button>
          <button className="car_heart-btn">
            <img src={CarHeart} alt="Car Heart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Car);
