import React from "react";
import "./header.css";
import Top from "./Top";
import Bottom from "./Bottom";

const Header = () => {
  return (
    <section id="header">
      <div className="w-100">
        <Top />
        <Bottom />
      </div>
    </section>
  );
};

export default Header;
