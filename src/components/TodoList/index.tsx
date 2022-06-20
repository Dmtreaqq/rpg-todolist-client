import TodoItem from "../Todo";
import { Todo } from "../../types";

type TodoListProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.title} done={todo.done} />
      ))}
    </div>
  );
};

export default TodoList;
