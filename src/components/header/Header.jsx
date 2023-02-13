import React, { memo } from "react";
import "./header.css";
import Top from "./Top";
import Bottom from "./Bottom";

const Header = () => {
  return (
    <section id="header">
      <Top />
      <Bottom />
    </section>
  );
};

export default memo(Header);
