import React, { Component } from "react";

class Poll extends Component {
  state = {
    sel: false,
    submited: false,
    options: ["windows", "macos", "linux"]
  };

  optionSelect = e => {
    this.setState({ sel: !this.state.sel });

    //THIS MAY HELP TO SELECT THE BUTTON CLICKED
    // this.setState({
    //   tasks: [
    //     ...this.state.tasks.map(task => {
    //       if (task.id === id) {
    //         task.task = e.target.value;
    //       }
    //       return task;
    //     })
    //   ]
    // });
    // END
  };

  activeStyle = () => {
    return {
      backgroundColor: this.state.sel ? "var(--orange)" : null
    };
  };

  submitPoll = () => {
    if (this.state.sel) {
      this.setState({ submited: true });
    }
  };

  resubmit = () => {
    this.setState({ submited: false, sel: !this.state.sel });
  };

  render() {
    return (
      <div className="poll">
        <h5>num of voters: 21,954</h5>
        <h1>POLL</h1>
        {this.state.submited ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h4>Thanks for voting!</h4>
            <h5
              style={{
                color: "white",
                textDecoration: "underline",
                marginTop: "40px",
                cursor: "pointer"
              }}
              onClick={this.resubmit}
            >
              Vote again
            </h5>
          </div>
        ) : (
          <div>
            <p>What operating system do you use for development purposes?</p>
            <div style={{ margin: "10px auto", textAlign: "center" }}>
              <span>
                <button
                  style={this.activeStyle()}
                  id="windows"
                  onClick={this.optionSelect}
                >
                  Windows
                </button>
                <button id="macos" onClick={this.optionSelect}>
                  macOS
                </button>
              </span>
              <span>
                <button id="linux" onClick={this.optionSelect}>
                  Linux
                </button>
              </span>
            </div>
            <button
              onClick={this.submitPoll}
              style={
                this.state.sel
                  ? { backgroundColor: "white", color: "black" }
                  : null
              }
              id="pollSubmit"
            >
              Submit
            </button>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default Poll;
