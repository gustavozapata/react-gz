import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.task.completed ? "line-through" : "none"
    };
  };

  showDelete = () => {
    return {
      visibility: this.props.task.completed ? "visible" : "hidden"
    };
  };

  editTask = (este, id) => {
    [...document.getElementsByClassName("elcheckbox")].forEach(ele => {
      ele.checked = false;
    });
    this.props.toggleComplete(este, id);
  };

  render() {
    const { id, task } = this.props.task;
    return (
      <div className="todoItem" style={this.getStyle()}>
        <input
          className="elcheckbox"
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)}
        />{" "}
        <input
          autoFocus
          style={this.getStyle()}
          className="input-task"
          value={task}
          onChange={this.props.typeTask.bind(this, id)}
          onFocus={
            this.props.task.completed ? this.editTask.bind(this, id) : null
          }
        />
        <button
          onClick={this.props.deleteItem.bind(this, id)}
          style={this.showDelete()}
        >
          delete
        </button>
      </div>
    );
  }
}

TodoItem.protoTypes = {
  tasks: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  typeTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default TodoItem;
