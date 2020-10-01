import React, { Component } from 'react';
import Todos from './components/Todos';

import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out Trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Lunch',
        completed: true,
      },
      {
        id: 3,
        title: 'Shopping',
        completed: false,
      },
    ],
  };

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

  delTodo = (id) => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  addTodo = (title) => {
    // console.log(title);
    const length = 32;

    const newTodo = {
      id: Math.round(
        Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
      )
        .toString(36)
        .slice(1),
      title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className='App'>
        {/* <div className='container'> */}
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        {/* </div> */}
      </div>
    );
  }
}
