import React, { Component } from "react";
import Tasks from "./Tasks.js";

import "./css/Todo.css";

class Todo extends Component {
  state = {
    status: "Nothing to do, it's time to relax!",
    tasks: []
  };

  tasksEmpty = () => {
    return {
      display: this.state.tasks.length < 1 ? "block" : "none"
    };
  };

  toggleComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    });
  };

  editItem = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          console.log(id);
        }
        return task;
      })
    });
  };

  deleteItem = id => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.id !== id)]
    });
  };

  addItem = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.tasks.length + 1, task: "", completed: false }
      ]
    });
  };

  typeTask = (id, e) => {
    this.setState({
      tasks: [
        ...this.state.tasks.map(task => {
          if (task.id === id) {
            task.task = e.target.value;
          }
          return task;
        })
      ]
    });
  };

  render() {
    return (
      <div className="todo">
        <h1>TO-DO</h1>
        <div className="container">
          <div className="todo-header">
            <h4 onClick={this.addItem}>+New Task</h4>
          </div>
          <div className="todo-body">
            <h3 style={this.tasksEmpty()}>{this.state.status}</h3>
            <Tasks
              tasks={this.state.tasks}
              editItem={this.editItem}
              deleteItem={this.deleteItem}
              toggleComplete={this.toggleComplete}
              typeTask={this.typeTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
