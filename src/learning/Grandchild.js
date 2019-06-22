import React, { Component } from "react";

class Grandchild extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          border: "2px solid red",
          margin: "10px 0 20px 20px",
          padding: "10px"
        }}
      >
        <h3>I'm a Grandchild component</h3>
        <p>I can access Parent's state like so:</p>
        <h5>
          &#123;this.props.alias&#125;{" "}
          <span style={{ color: "var(--pink)" }}>{this.props.alias}</span>
        </h5>
      </div>
    );
  }
}

export default Grandchild;
