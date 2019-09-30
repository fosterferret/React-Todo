import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { id, title, isCompleted } = this.props.todo;
    return (
      <div>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={isCompleted ? "checked" : ""}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTask.bind(this, id)}
          >
            Delete Task
          </button>
        </p>
      </div>
    );
  }
}
