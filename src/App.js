import React, { Component } from 'react'
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import { v4 as uuidv4 } from "uuid"; 
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(), //volas funkci co je v importu (npm install uuid) generujes tim id
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Dinner for visitors",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Finish app",
        completed: false,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
