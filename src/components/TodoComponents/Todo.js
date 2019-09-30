import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { id, title, isCompleted } = this.props.todo;
    const itemClass = (isCompleted ? "done" : "");
    return (
      <div>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={isCompleted ? "checked" : ""}
          />{" "}
          <p className={itemClass}
          >
          {title}
          </p>
          <button
            onClick={this.props.deleteTask.bind(this, id)}
          >
            Delete Task
          </button>
      </div>
    );
  }
}
