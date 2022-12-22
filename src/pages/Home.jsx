import { List } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Form from "../componentes/Form";
import TodoItem from "../componentes/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  }

  const editTodo = (id, editedText) => {
    var novoArray = [...todos];

    for(var i in novoArray){
      if(novoArray[i].id == id){
        novoArray[i].text = editedText;
      }
    }

    // novoArray.splice(id, 1, {text:editedText, id:id});
    setTodos(novoArray);
  }

  return (
    <Container
      maxWidth="xs"
      style={{ marginTop: "1em" }}
    >
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
          </div>
        ))}
      </List>
    </Container>
  );
}
