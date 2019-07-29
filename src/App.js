import React, { Component } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "buy milk" }, { id: 2, content: "buy bread" }]
  };

  deleteTodo = id => {
    console.log(id);
    const updateTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: updateTodos
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let newTodosArray = [...this.state.todos, todo];
    this.setState({
      todos: newTodosArray
    })
  }

  render() {
    return (
      <div className="todos-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
