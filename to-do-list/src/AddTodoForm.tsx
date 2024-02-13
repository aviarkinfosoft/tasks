import React, { useState } from "react";

interface AddTodoFormProps {
  addTodo: (newTodo: { id: number; text: string; done: boolean }) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({ id: Date.now(), text, done: false });
    setText("");
  };

  return (
    <form className="px-4 py-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter todo..."
        value={text}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
