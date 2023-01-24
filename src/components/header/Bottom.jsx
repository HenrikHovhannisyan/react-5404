import React from "react";
import "./header.css";
import Logo from "../../assets/img/logo.png";
import BottomList from "./BottomList";
import RightButtons from "./RightButtons";

const Bottom = () => {
  return (
    <nav className="navbar navbar-expand-lg bottom_header">
      <div className="container-fluid max_width">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" className="bottom_header-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <BottomList />
          <RightButtons />
        </div>
      </div>
    </nav>
  );
};

export default Bottom;
