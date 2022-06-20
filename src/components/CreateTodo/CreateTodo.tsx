import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TODO } from "../../gql/mutation";
import { GET_TODOS } from "../../gql/query";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [createTodo] = useMutation(CREATE_TODO, {
    variables: {
      title,
    },
    refetchQueries: [{ query: GET_TODOS }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    createTodo();
    setTitle("");
  };

  return (
    <Box onSubmit={handleAddTodo} sx={{ display: "flex", marginY: 4 }} component="form">
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleAddTodo}>
                <AddCircleOutlineIcon color="primary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
        onChange={handleChange}
        variant="filled"
        label="Todo"
        value={title}
      />
    </Box>
  );
};

export default CreateTodo;
