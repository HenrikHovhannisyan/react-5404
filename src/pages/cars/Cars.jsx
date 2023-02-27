import React, { memo, useEffect, useState } from "react";
import Styles from "./cars.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Car from "../../components/car/Car";
import axios from "axios";
import { CAR_LIST } from "../../config/api";

const Cars = () => {
  const [data, setData] = useState();
  const [sort, setSort] = useState("low");

  const sortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (sort === "low") {
      data?.sort((a, b) => b.price - a.price);
    } else {
      data?.sort((a, b) => a.price - b.price);
    }
  });

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

  return (
    <>
      <Header />
      <div className="max_width container-fluid">
        <div className="row">
          <h1 className={Styles.title}>Cars for sale</h1>
          <div className={Styles.sort}>
            <p className={Styles.sort_title}>Sort by:</p>
            <select
              className={Styles.sort_variant}
              value={sort}
              onChange={sortChange}
            >
              <option value="low">Lowest price</option>
              <option value="top">Top price</option>
            </select>
          </div>
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-9">
            <div className="row">
              {data &&
                data.map((car) => {
                  return (
                    <div key={car.id} className="col-12 col-sm-6 col-lg-4">
                      <Car
                        img={car.image}
                        name={car.canonical_mmt}
                        price={car.price}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(Cars);
