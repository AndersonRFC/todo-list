import { List } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Form from "../componentes/Form";
import TodoItem from "../componentes/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Container
      maxWidth="xs"
      style={{ marginTop: "1em" }}
    >
      <Form todoHandler={todoHandler} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div style={{ marginTop: "1em" }}>
            <TodoItem todo={todo}/>
          </div>
        ))}
      </List>
    </Container>
  );
}
