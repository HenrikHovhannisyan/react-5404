import React, { memo } from "react";
import { Link } from "react-router-dom";
import Heart from "../../assets/img/icons/heart.png";

const RightButtons = () => {
  return (
    <div className="rightButtons_header">
      <button className="btn">
        <img src={Heart} alt="Heart" />
      </button>
      <Link to='/login' className="btn rightButtons_header_login">Login</Link>
      <button className="btn rightButtons_header_SignUp">Sign up</button>
    </div>
  );
};

export default memo(RightButtons);
