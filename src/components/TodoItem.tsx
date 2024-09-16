import React, { useState } from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded-md shadow-sm">
      {isEditing ? (
        <input
          type="text"
          className="flex-grow border border-gray-300 p-1 rounded-md mr-2 focus:outline-none focus:border-blue-400"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleEdit}
          className={`px-3 py-1 rounded-md text-white ${
            isEditing ? "bg-blue-500" : "bg-green-500"
          } hover:bg-opacity-80 transition-colors`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
