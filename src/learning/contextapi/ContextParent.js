import React, { Component } from "react";
import ContextChild from "./ContextChild";
import "./styles.css";

import { Link } from "react-router-dom";
import MyProvider from "./MyContext";

class ContextParent extends Component {
  render() {
    return (
      //3. wrap the entire component into context provider
      <MyProvider>
        <>
          <div className="contextparent">
            <h1>Context Parent</h1>
            <br />
            <h4>
              <i>import MyProvider</i>
            </h4>
            <br />
            <h3>&lt;MyProvider&gt;</h3>
            <br />
            <h3 className="indent">&lt;Child /&gt;</h3>
            <ContextChild />
            <h3 className="indent">&lt;Child /&gt;</h3>
            <ContextChild />
            <h3>&lt;/MyProvider&gt;</h3>
          </div>
          <Link to="/react-gz/learning">
            <p
              style={{
                textAlign: "center",
                margin: "25px auto",
                fontWeight: "bold"
              }}
            >
              React State & Props
            </p>
          </Link>
        </>
      </MyProvider>
    );
  }
}

export default ContextParent;
