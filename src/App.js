import React from "react";
import { TodoForm } from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  state = {
    todos: []
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        return todo;
        }
      })
    });
  };

  addTask = item => {
    this.setState({
      todos: [...this.state.todos, item]
    });
  };


  deleteTask = id => {
    if(window.confirm('Are you sure?')){
    let list = this.state.todos;
    list.map(todo => {
      if (todo.id === id) {
        list.splice(list.indexOf(todo), 1)
      }
    })
    this.setState({
      todos: list
    })
  }}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList todos={this.state.todos} deleteTask={this.deleteTask} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
