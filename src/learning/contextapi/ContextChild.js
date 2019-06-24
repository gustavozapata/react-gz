import React, { Component } from "react";
import ContextGrandchild from "./ContextGrandchild";

class ContextChild extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "2px solid orange",
            margin: "10px 0 20px 20px",
            padding: "10px"
          }}
        >
          <h2>Context Child</h2>
          <br />
          <h3>&lt;ContextGrandchild /&gt;</h3>
          <ContextGrandchild />
        </div>
      </React.Fragment>
    );
  }
}

export default ContextChild;
