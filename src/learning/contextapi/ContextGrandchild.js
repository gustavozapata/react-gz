import React, { Component } from "react";
import { MyContext } from "./MyContext";

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
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <h3>Context Grandchild</h3>
              <br />
              <h4>
                <i>import &#123; MyContext &#125;</i>
              </h4>
              <br />
              <h3>&lt;MyContext.Consumer&gt;</h3>
              <br />
              <div className="indent">
                <p>I can access Context Parent state like so:</p>
                <h4>&#123;&#40;context&#41; =&gt; &#40;</h4>
                <h5 className="indent">
                  context.state.age: {context.state.age}
                </h5>
                <h5 className="indent">
                  context.state.name: {context.state.nombre}
                </h5>
                <button
                  className="indent"
                  style={{
                    fontSize: ".7em",
                    padding: "2px 6px",
                    border: "1px solid var(--pink)"
                  }}
                  onClick={context.growYearOlder}
                >
                  onClick=&#123;context.growYearOlder&#125;
                </button>
                <h4>&#125;&#41;</h4>
              </div>
              <br />
              <h3>&lt;/MyContext.Consumer&gt;</h3>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Grandchild;
