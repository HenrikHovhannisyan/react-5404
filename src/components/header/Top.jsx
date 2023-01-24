import React from "react";
import "./header.css";
import Whatsapp from "../../assets/img/icons/whatsapp.png";
import Telegram from "../../assets/img/icons/telegram.png";
import Instagram from "../../assets/img/icons/instagram.png";
import Phone from "../../assets/img/icons/phone.png";

const Top = () => {
  return (
    <div className="top_header">
      <div className="container-fluid max_width">
        <div className="">
          <a href="#Whatsapp" className="top_header-icon">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
          <a href="#Telegram" className="top_header-icon">
            <img src={Telegram} alt="Telegram" />
          </a>
          <a href="#Instagram" className="top_header-icon">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>

        <div className="">
          <a href="#Phone" className="top_header-phone">
            <img src={Phone} alt="Phone" />
            123-456-789
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
