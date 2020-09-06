import React from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';

class App extends React.Component {
  state = {
    todos: [
      { content: 'Start coding', id: '1'},
      { content: 'End coding', id: '2'}
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="blue-text center">Todo App</h1>
        <Todos content={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTodos addTodo={ this.addTodo } />
      </div>
    );
  }
}

export default App;
