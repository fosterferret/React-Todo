import React from "react";
import { TodoForm } from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Search from './components/TodoComponents/Search'
import "./Todo.css";

class App extends React.Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
  };

  toggleComplete = id => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    localStorage.setItem(
      "todos",
      JSON.stringify(
        storedTodos.map(todo => {
          if (todo.id === id) todo.isCompleted = !todo.isCompleted;
          return todo;
        })
      )
    );
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
    });
  };

  addTask = task => {
    if (!localStorage.getItem("todos")) {
      const todos = [task];
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      const todos = [...storedTodos, task];
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
    });
  };

  deleteTask = id => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    storedTodos.map(todo => {
      if (todo.id === id) {
        storedTodos.splice(storedTodos.indexOf(todo), 1);
        const todos = storedTodos;
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    });
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
    });
  };

  handleSearch = event => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const searchQuery = event.target.value.toLowerCase();
    const displayedTodos = storedTodos.filter(el => {
      const searchValue = el.title.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      todos: displayedTodos
    });
  };
 

  render() {
    return (
      <div className="container">
        <div className="todo-app">
          <div className="left">
            <h1 className="header">Get Stuff Done!</h1>
            <Search handleSearch={this.handleSearch}/>
          </div>
          <div className="right">
            <TodoForm addTask={this.addTask} className="form" />
            <TodoList
              todos={this.state.todos}
              deleteTask={this.deleteTask}
              toggleComplete={this.toggleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
