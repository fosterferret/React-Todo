import React, { Component } from "react";
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Todo key={todo.id} todo = {todo} toggleComplete={this.props.toggleComplete} deleteTask={this.props.deleteTask}/>
        ));
    }
}
