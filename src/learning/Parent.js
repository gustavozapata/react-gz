import React, { Component } from "react";
import Child from "./Child";
import "./styles.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import ContextParent from "./contextapi/ContextParent";

class Parent extends Component {
  state = {
    nombre: "Tavo",
    age: 30,
    male: true
  };
  render() {
    return (
      <Router>
        <Route
          exact
          path="/react-gz/learning"
          render={() => (
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
              <Link to="/react-gz/contextapi">
                <p
                  style={{
                    textAlign: "center",
                    margin: "25px auto",
                    fontWeight: "bold"
                  }}
                >
                  Context API Redux-like
                </p>
              </Link>
            </>
          )}
        />
        <Route path="/react-gz/contextapi" component={ContextParent} />
      </Router>
    );
  }
}

export default Parent;
