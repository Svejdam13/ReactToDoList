import React, { Component } from 'react'
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner for visitors',
        completed: false
      },
      {
        id: 3,
        title: 'Finish app',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
// Delete Todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id) ]});
}
// Add Todo
addTodo = (title) => {
  this.s
}

  render(){
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    </div>
  );
 }
}

export default App;
