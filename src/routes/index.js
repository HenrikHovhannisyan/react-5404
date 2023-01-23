import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
