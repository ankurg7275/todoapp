import React from 'react';

function TodoItem({ todo, markComplete }) {
  return (
    <div
      onClick={() => markComplete(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
    </div>
  );
}

export default TodoItem;
