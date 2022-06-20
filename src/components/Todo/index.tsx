import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../../gql/mutation";
import { GET_TODOS } from "../../gql/query";

type TodoItemProps = {
  text: string;
  done: boolean;
  id: string;
  checkTodo: () => void;
};

const TodoItem = ({ text, done, checkTodo, id }: TodoItemProps) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: {
      id,
    },
    refetchQueries: [{ query: GET_TODOS }],
  });

  const [checked, setChecked] = useState<boolean>(done);
  const handleCheck = () => {
    setChecked(!checked);
    checkTodo();
  };

  const handleDeleteTodo = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteTodo();
  };

  return (
    <FormGroup>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 2,
          marginY: 1,
        }}
      >
        <FormControlLabel
          control={<Checkbox onChange={handleCheck} checked={checked} />}
          label={
            <Typography sx={{ textDecoration: checked ? "line-through" : "none" }}>
              {text}
            </Typography>
          }
          labelPlacement="end"
        />

        <IconButton onClick={handleDeleteTodo} aria-label="Delete todo">
          <DeleteIcon color="error" />
        </IconButton>
      </Paper>
    </FormGroup>
  );
};

export default TodoItem;
