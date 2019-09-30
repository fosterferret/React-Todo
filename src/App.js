import React from "react";
import { TodoForm } from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./Todo.css";

class App extends React.Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos"))
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
    if (!localStorage.getItem("todos").length) {
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          todos={this.state.todos}
          deleteTask={this.deleteTask}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
