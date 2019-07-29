import React, {Component} from 'react';
import Todos from './Todos'

class App extends Component {
  state= {
    todos: [
      {id: 1, content: "buy milk"},
      {id: 2, content: "buy bread"},
    ]
  }

  deleteTodo = (id) => {
    console.log(id)
    const updateTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: updateTodos
    })
  }

  render() {
  return (
    <div className="todos-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
}
}

export default App;
