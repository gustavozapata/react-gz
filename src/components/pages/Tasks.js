import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    return this.props.tasks.map(task => (
      <TodoItem
        key={task.id}
        task={task}
        deleteItem={this.props.deleteItem}
        toggleComplete={this.props.toggleComplete}
        typeTask={this.props.typeTask}
      />
    ));
  }
}

Tasks.protoTypes = {
  tasks: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  typeTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default Tasks;
