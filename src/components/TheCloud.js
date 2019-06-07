import React, { Component } from "react";

class TheCloud extends Component {
  dropFileStyles = () => {
    return {
      height: "300px",
      width: "90%",
      margin: "20px auto",
      display: "flex",
      alignItems: "center",
      border: "3px dashed var(--blue)"
    };
  };

  state = {
    message: "Drop your files here"
  };

  dragStyles = ev => {
    ev.preventDefault();
    ev.target.style.border = "3px dashed red";
    ev.target.firstChild.style.color = "red";
    this.setState({
      message: "You can let go!"
    });
  };

  leaveStyles = ev => {
    ev.target.style.border = "3px dashed var(--blue)";
    ev.target.firstChild.style.color = "var(--blue)";
    this.setState({
      message: "Drop your files here"
    });
  };

  dropHandler = ev => {
    ev.preventDefault();
    ev.target.style.border = "3px solid var(--yellow)";
    ev.target.firstChild.style.color = "var(--yellow)";
    this.setState({
      message: `${
        ev.dataTransfer.items[0].getAsFile().name
      } was successfully dropped`
    });
  };

  render() {
    return (
      <div className="the-cloud">
        <h1>THE CLOUD</h1>
        <div
          className="drop-area"
          style={this.dropFileStyles()}
          onDragOver={this.dragStyles}
          onDragLeave={this.leaveStyles}
          onDrop={this.dropHandler}
        >
          <h4
            style={{
              textAlign: "center",
              fontStyle: "italic",
              color: "var(--blue)",
              pointerEvents: "none"
            }}
          >
            {this.state.message}
          </h4>
        </div>
        <p>Max. file size: 200Mb</p>
      </div>
    );
  }
}

export default TheCloud;
