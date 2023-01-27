import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import About from "./components/about/About";
import LatestCar from "./components/latestCar/LatestCar";
import PopularCars from "./components/popularCars/PopularCars";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <WhatWeDo />
      <About />
      <LatestCar />
      <PopularCars />
    </>
  );
}

export default App;
