import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, markComplete }) {
  // Sort todos by completion (completed first) and then by creation date (newest first)
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={markComplete} />
      ))}
    </div>
  );
}

export default TodoList;
