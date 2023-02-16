import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heart from "../../assets/img/icons/heart.png";

const RightButtons = ({ login, name }) => {
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="rightButtons_header d-flex">
      <button className="btn">
        <img src={Heart} alt="Heart" />
      </button>
      {login ? (
        <div className="dropdown">
          <button
            className="btn rightButtons_header_login dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {name}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#reset_password">
                Reset password
              </a>
            </li>
            <li>
              <button className="dropdown-item" onClick={LogOut}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Link to="/login" className="btn rightButtons_header_login">
            Login
          </Link>
          <button className="btn rightButtons_header_SignUp">Sign up</button>
        </>
      )}
    </div>
  );
};

export default memo(RightButtons);
