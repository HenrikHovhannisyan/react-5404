import React, { memo } from "react";
import Heart from "../../assets/img/icons/heart.png";

const RightButtons = () => {
  return (
    <div className="rightButtons_header">
      <button className="btn">
        <img src={Heart} alt="Heart" />
      </button>
      <button className="btn rightButtons_header_login">Login</button>
      <button className="btn rightButtons_header_SignUp">Sign up</button>
    </div>
  );
};

export default memo(RightButtons);
