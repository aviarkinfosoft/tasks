import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItems";
import AddTodoForm from "./AddTodoForm";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<
    Array<{ id: number; text: string; done: boolean }>
  >([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: { id: number; text: string; done: boolean }) => {
    setTodos([...todos, newTodo]);
  };

  const markAsDone = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (id: number, updatedTodo: { text: string }) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedTodo.text } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-3xl text-center font-bold text-gray-800 py-4">
        To-Do List
      </h1>
      <AddTodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markAsDone={markAsDone}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
