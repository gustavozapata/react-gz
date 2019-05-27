import React, { Component } from "react";

class Poll extends Component {
  state = {};
  render() {
    return (
      <div className="poll">
        <h1>POLL</h1>
        <p>Which technology you're using the most in 2019?</p>
        <div style={{ margin: "10px auto", textAlign: "center" }}>
          <span>
            <button>React</button><button>Java</button>
          </span>
          <span>
            <button>Python</button><button>Vue</button>
          </span>
        </div>
        <button id="pollSubmit">Submit</button>
      </div>
    );
  }
}

export default Poll;
