import React, { Component } from "react";
import Grandchild from "./Grandchild";

class Child extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "2px solid blue",
            margin: "10px 0 20px 20px",
            padding: "10px"
          }}
        >
          <h2>I'm Child component</h2>
          <br />
          <h3>&lt;Grandchild alias=&#123;this.props.alias&#125; /&gt;</h3>
          <Grandchild alias={this.props.alias} />
        </div>
      </React.Fragment>
    );
  }
}

export default Child;
