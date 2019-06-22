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
          <h3>&lt;Grandchild alias=&#123;this.props.alias&#125; /&gt;</h3>
          <ContextGrandchild alias={this.props.alias} />
        </div>
      </React.Fragment>
    );
  }
}

export default ContextChild;
