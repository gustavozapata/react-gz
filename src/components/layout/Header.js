import React from "react";

function Header() {
  return (
    <div>
      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <h1 className="title">REACT.GZ</h1>
        <span style={gzLine} className="gz-line" />
      </div>
      <div className="lines">
        <span />
        <span />
      </div>
    </div>
  );
}

const gzLine = {
  display: "inline-block",
  width: "60px",
  height: "15px",
  backgroundColor: "var(--navy)",
  marginLeft: "170px"
};

export default Header;
