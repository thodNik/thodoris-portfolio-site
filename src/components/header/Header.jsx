import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
        <div className="container-header">
          <h1 className="heading">Thodoris Nikolaidis</h1>
          <h4>Full Stack Developer</h4>
        </div>
        <div className="overlay"></div>
    </header>
  );
};

export default Header;
