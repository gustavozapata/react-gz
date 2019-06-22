import React, { Component } from "react";
import Child from "./Child";
import "./styles.css";

class Parent extends Component {
  state = {
    nombre: "Tavo",
    age: 30,
    male: true
  };
  render() {
    return (
      <>
        <div className="parent">
          <h1>I'm Parent component</h1>
          <h3>state = &#123;</h3>
          <h3 className="indent">
            nombre: <span style={{ color: "var(--pink)" }}>Tavo</span>
          </h3>
          <h3 className="indent">age: 30</h3>
          <h3 className="indent">male: true</h3>
          <h2>&#125;</h2>
          <br />
          <h3>&lt;Child alias=&#123;this.state.nombre&#125; /&gt;</h3>
          <Child alias={this.state.nombre} />
          <h3>&lt;Child alias=&#123;this.state.nombre&#125; /&gt;</h3>
          <Child alias={this.state.nombre} />
        </div>
      </>
    );
  }
}

export default Parent;
