import React, { Component } from "react";

class Poll extends Component {
  state = {
    windows: false,
    macos: false,
    linux: false,
    submited: false,
    options: ["windows", "macos", "linux"],
    option: ""
  };

  optionSelect = e => {
    this.setState({ sel: true, option: e.target.id });
    switch (e.target.id) {
      case "windows":
        this.setState({ windows: true, linux: false, macos: false });
        break;
      case "macos":
        this.setState({ windows: false, linux: false, macos: true });
        break;
      case "linux":
        this.setState({ windows: false, linux: true, macos: false });
        break;
      default:
        this.setState({ windows: false, linux: false, macos: false });
    }
  };

  submitPoll = () => {
    if (this.state.sel) {
      this.setState({
        submited: true,
        windows: false,
        macos: false,
        linux: false
      });
    }
  };

  resubmit = () => {
    this.setState({ submited: false, sel: !this.state.sel });
  };

  render() {
    return (
      <div className="poll">
        <h1>POLL</h1>
        {this.state.submited ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h4>Thanks for voting!</h4>
            <br />
            <h5>
              You voted for <u>{this.state.option}</u>
            </h5>
            <br />
            <h5>voters: 21,954</h5>
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
                  className={this.state.windows ? "select" : null}
                  id="windows"
                  onClick={this.optionSelect}
                >
                  Windows
                </button>
                <button
                  className={this.state.macos ? "select" : null}
                  id="macos"
                  onClick={this.optionSelect}
                >
                  macOS
                </button>
              </span>
              <span>
                <button
                  className={this.state.linux ? "select" : null}
                  id="linux"
                  onClick={this.optionSelect}
                >
                  Linux
                </button>
              </span>
            </div>
            <button onClick={this.submitPoll} id="pollSubmit">
              Submit
            </button>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default Poll;
