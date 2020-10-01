import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({todos, markComplete, delTodo}) => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={markComplete}
        delTodo={delTodo}
      />
    ));
}

export default Todos;
