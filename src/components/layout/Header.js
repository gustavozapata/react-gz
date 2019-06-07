import React from "react";
import homeImage from "../images/home.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="login-container" style={loginStyle}>
        <Link to="/react-gz/login">
          <p>Login</p>
        </Link>
      </div>
      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <h1 className="title">REACT.GZ</h1>
        <span style={gzLine} className="gz-line" />
      </div>
      <Link to="/react-gz">
        <img src={homeImage} alt="Home icon" style={homeImgStyle} />
      </Link>
      <div className="lines">
        <span />
        <span />
      </div>
    </div>
  );
}

const loginStyle = {
  position: "absolute",
  left: "40px",
  top: "30px",
  fontWeight: "bold",
  color: "var(--blue)"
};

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
