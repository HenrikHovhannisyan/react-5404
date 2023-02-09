import React, { useEffect, useState } from "react";
import Styles from "./cars.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Car from "../../components/car/Car";
import { cars } from "../../config/data";

const Cars = () => {
  const [sort, setSort] = useState("top");

  const sortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (sort === "low") {
      cars.sort((a, b) => b.id - a.id);
    } else if (sort === "top") {
      cars.sort((a, b) => a.id - b.id);
    }
  }, [sort]);

  return (
    <>
      <Header />
      <div className="max_width container-fluid">
        <div className="row">
          <h1 className={Styles.title}>Cars for sale</h1>
          <div className={Styles.sort}>
            <p className={Styles.sort_title}>Sort by:</p>
            <select className={Styles.sort_variant} value={sort} onChange={sortChange}>
              <option value="low">Lowest price</option>
              <option value="top">Top price</option>
            </select>
          </div>
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-9">
            <div className="row">
              {cars.map((car) => {
                return (
                  <div key={car.id} className="col-12 col-sm-6 col-lg-4">
                    <Car
                      img={car.img}
                      name={car.name}
                      listingPrice={car.listingPrice}
                      mmrPrice={car.mmrPrice}
                      sellingPrice={car.sellingPrice}
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

export default Cars;
