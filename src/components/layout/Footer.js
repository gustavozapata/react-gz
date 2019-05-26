import React from "react";

const Footer = () => {
  return (
    <div>
      <h3 style={footerStyle}>Copyright &copy; 2019</h3>
    </div>
  );
};

const footerStyle = {
  color: "var(--purple)",
  textAlign: "center"
};

export default Footer;
