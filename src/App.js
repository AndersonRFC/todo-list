import logo from "./logo.svg";
import "./App.css";
import Form from "./componentes/Form";
import TodoItem from "./componentes/TodoItem";
import { Container } from "@mui/system";
import { List } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form />
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
      <TodoItem />
      </List>
    </Container>
  );
}

export default App;
