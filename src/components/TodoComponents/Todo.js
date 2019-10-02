import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { id, title, isCompleted } = this.props.todo;
    const itemClass = isCompleted ? "done" : "";
    return (
      <div className="task">
        <div className="checkbox-div">
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={isCompleted ? "checked" : ""}
          />{" "}
        </div>
        <div className="title-div"><h3 className={itemClass}>{title}</h3></div>
        <div className="delete-div"><button onClick={this.props.deleteTask.bind(this, id)}>X</button></div>
      </div>
    );
  }
}
