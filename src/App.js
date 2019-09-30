import React from "react";
import { TodoForm } from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import './Todo.css'

class App extends React.Component {
  state = {
    todos: JSON.parse(localStorage.getItem('todos'))
  };

  // saveToLocalStorage = (keyName, value) => {
	// 	localStorage.setItem(keyName, value);


  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    });
  };

  addTask = task => {
    // this.setState({
    //   todos: [...this.state.todos, task]
    // });
    if(!localStorage.getItem('todos').length) {
      const todos = [task];
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    else {
      const storedTodos = JSON.parse(localStorage.getItem('todos'))
      const todos = [...storedTodos, task]
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    this.setState({
      todos: JSON.parse(localStorage.getItem('todos'))
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
