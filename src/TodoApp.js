import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Date.now(), // Use a unique identifier (timestamp) as the ID
        },
      ]);
      setInputText('');
    }
  };

  const markComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') addTodo();
        }}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={resetTodos}>Reset</button>
      <TodoList todos={todos} markComplete={markComplete} />
    </div>
  );
}

export default TodoApp;
