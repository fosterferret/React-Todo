import React from "react";

class App extends React.Component {
  state = {
    todos: []
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      })
    });
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
