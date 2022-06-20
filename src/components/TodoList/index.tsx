import { useState } from "react";
import TodoItem from "../Todo";
import { Todo } from "../../types";

type TodoListProps = {
  todos: Todo[];
  checkTodo: (id: number) => void;
};

const TodoList = ({ todos, checkTodo }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          checkTodo={() => checkTodo(123)}
          text={todo.title}
          done={todo.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
