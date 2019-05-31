import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.task.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, task } = this.props.task;
    return (
      <div className="todoItem" style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)}
        />{" "}
        <input
          autoFocus
          style={this.getStyle()}
          className="input-task"
          value={task}
          onChange={this.props.typeTask.bind(this, id)}
        />
        <button onClick={this.props.deleteItem.bind(this, id)}>delete</button>
        <button onClick={this.props.editItem.bind(this, id)}>edit</button>
      </div>
    );
  }
}

TodoItem.protoTypes = {
  tasks: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  typeTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default TodoItem;
