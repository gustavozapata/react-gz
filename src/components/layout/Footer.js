import React from "react";

const Footer = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <span
        style={{
          width: "65%",
          height: "20px",
          display: "block",
          margin: "10px auto",
          backgroundColor: "var(--orange)"
        }}
      />
      <h3 style={footerStyle}>
        <a
          href="https://gustavozapata.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          GZ
        </a>{" "}
        Copyright &copy; 2019
      </h3>
    </div>
  );
};

const footerStyle = {
  color: "var(--purple)",
  textAlign: "center"
};

export default Footer;
