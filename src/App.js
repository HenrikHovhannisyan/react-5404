import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import About from "./components/about/About";
import LatestCar from "./components/latestCar/LatestCar";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <WhatWeDo />
      <About />
      <LatestCar />
    </>
  );
}

export default App;
