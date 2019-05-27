import React from "react";
import homeImage from "../images/home.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <h1 className="title">REACT.GZ</h1>
        <span style={gzLine} className="gz-line" />
      </div>
      <Link to="/">
        <img src={homeImage} alt="Home icon" style={homeImgStyle} />
      </Link>
      <div className="lines">
        <span />
        <span />
      </div>
    </div>
  );
}

const homeImgStyle = {
  width: "50px",
  position: "absolute",
  top: "30px",
  right: "30px",
  cursor: "pointer"
};

const gzLine = {
  display: "inline-block",
  width: "60px",
  height: "15px",
  backgroundColor: "var(--navy)",
  marginLeft: "170px"
};

export default Header;
