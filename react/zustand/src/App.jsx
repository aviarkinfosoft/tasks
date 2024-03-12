// App.js
import React, { useState } from 'react';
import useStore from './store';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useStore();
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
