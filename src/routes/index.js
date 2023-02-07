import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "../pages/404/NoPage";
import App from "../App";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
