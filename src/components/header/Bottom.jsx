import React, { memo, useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/img/logo.png";
import BottomList from "./BottomList";
import RightButtons from "./RightButtons";
import Swal from "sweetalert2";
import axios from "axios";
import { USER } from "../../config/api";

const Bottom = () => {
  const [isLogin, isSetLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const token = localStorage.getItem("token") || sessionStorage.getItem('token');
  const message = sessionStorage.getItem("message");

  if (message === "successLogin") {
    Swal.fire("Success", "Successfully signed in", "success");
    sessionStorage.removeItem("message");
  }

  useEffect(() => {
    if (token) {
      isSetLogin(true);

      axios
        .get(USER, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (res) {
          setUserName(res.data.username);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

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
          <RightButtons login={isLogin} name={userName} />
        </div>
      </div>
    </nav>
  );
};

export default memo(Bottom);
