import React from "react";

interface TodoItemProps {
  todo: { id: number; text: string; done: boolean };
  markAsDone: (id: number) => void;
  updateTodo: (id: number, updatedTodo: { text: string }) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  markAsDone,
  updateTodo,
  deleteTodo,
}) => {
  const handleMarkAsDone = () => {
    markAsDone(todo.id);
  };

  const handleUpdateTodo = () => {
    const updatedText = prompt("Update todo:", todo.text);
    if (updatedText && updatedText.trim()) {
      updateTodo(todo.id, { text: updatedText });
    }
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center border-b border-gray-300 py-2">
      <input
        type="checkbox"
        className="mr-2 form-checkbox h-6 w-6 text-indigo-600 rounded"
        checked={todo.done}
        onChange={handleMarkAsDone}
      />
      <span
        className={`flex-grow ${
          todo.done ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>
      <button className="mr-2 text-sm text-blue-500" onClick={handleUpdateTodo}>
        Update
      </button>
      <button className="text-sm text-red-500" onClick={handleDeleteTodo}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
