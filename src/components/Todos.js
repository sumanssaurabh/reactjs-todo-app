import React, { Component } from 'react';
import TodoItem from './TodoItem';

// export default class Todos extends Component {
//   render() {
//     return this.props.todos.map((todo) => (
//       <TodoItem
//         key={todo.id}
//         todo={todo}
//         markComplete={this.props.markComplete}
//         delTodo={this.props.delTodo}
//       />
//     ));
//   }
// }

export default function Todos(props) {
  return (
    <span>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={props.markComplete}
          delTodo={props.delTodo}
        />
      ))}
    </span>
  );
}
