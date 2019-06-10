import React, { Component } from "react";
import { Link } from "react-router-dom";

class TodoPreview extends Component {
  state = {};
  render() {
    var areTasks = 1;
    return (
      <div className="todo-preview">
        <h1>TO-DO</h1>
        <div className="todo-preview-container">
          {areTasks ? (
            <div className="lista">
              <ul>
                <li>revise for DB</li>
                <li>do the shopping</li>
                <li>call 07879334492</li>
                <li>make the login system</li>
              </ul>
            </div>
          ) : (
            <h4>All done here!</h4>
          )}
        </div>
        <Link to="/react-gz/todo">
          <button>GO</button>
        </Link>
      </div>
    );
  }
}

export default TodoPreview;
