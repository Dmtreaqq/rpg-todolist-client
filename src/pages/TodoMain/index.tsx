import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../../gql/query";
import { Todo } from "../../types";
import TodoList from "../../components/TodoList";
import CreateTodo from "../../components/CreateTodo/CreateTodo";

type TodosData = {
  todos: Todo[] | [];
};

const TodoMain = () => {
  const { loading, error, data } = useQuery<TodosData>(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const checkTodo = () => {
    // TODO
  };

  console.log(data);

  return (
    <Box>
      <Typography textAlign="center" variant="h2" component="h1">
        TodoList
      </Typography>
      <CreateTodo />
      {data && <TodoList todos={data.todos} checkTodo={checkTodo} />}
    </Box>
  );
};

export default TodoMain;

// const [todos, setTodos] = useState<Todo[] | []>([]);

// const checkTodo = (id: number) => {
//   const newTodos = todos.map((todo) => {
//     if (todo.id === id) {
//       return {
//         ...todo,
//         done: !todo.done,
//       };
//     }

//     return todo;
//   });

//   setTodos(newTodos);
//   localStorage.setItem("todos", JSON.stringify(newTodos));
// };
