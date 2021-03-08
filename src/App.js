import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList = [{
        id: '555',
        task: 'Change Laundry',
        completed: false
      },
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
