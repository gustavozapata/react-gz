import React, { Component } from "react";

class Poll extends Component {
  state = {};
  render() {
    return (
      <div className="poll">
        <h5>num of voters: 21,954</h5>
        <h1>POLL</h1>
        <p>What operating system do you use for development purposes?</p>
        <div style={{ margin: "10px auto", textAlign: "center" }}>
          <span>
            <button>Windows</button>
            <button>macOS</button>
          </span>
          <span>
            <button>Linux</button>
          </span>
        </div>
        <button id="pollSubmit">Submit</button>
      </div>
    );
  }
}

export default Poll;
