import React, { Component } from "react";
import { Link } from "react-router-dom";

class TodoPreview extends Component {
  state = {};
  render() {
    return (
      <div className="todo-preview">
        <h1>TO-DO</h1>
        <div className="todo-preview-container">
          <h4>All done here!</h4>
        </div>
        <Link to="/todo">
          <button>GO</button>
        </Link>
      </div>
    );
  }
}

export default TodoPreview;
