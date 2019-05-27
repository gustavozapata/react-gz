import React from "react";

const Footer = () => {
  return (
    <div>
      <span
        style={{
          width: "65%",
          height: "20px",
          display: "block",
          margin: "10px auto",
          backgroundColor: "var(--orange)"
        }}
      />
      <h3 style={footerStyle}>Copyright &copy; 2019</h3>
    </div>
  );
};

const footerStyle = {
  color: "var(--purple)",
  textAlign: "center"
};

export default Footer;
