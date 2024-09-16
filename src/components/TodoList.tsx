import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="space-y-3">
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      ) : (
        <li className="text-center text-gray-500">No todos available</li>
      )}
    </ul>
  );
};

export default TodoList;
