import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { pressButtonEnter } from "./Utilities";


export default function Form({todoHandler}) {

  pressButtonEnter("#outlined-basic", "#submit");

  const [text, setText] = useState(null);

  return (
    <div>
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="Tarefa"
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <Button id="submit" variant="text" onClick={() => todoHandler(text)}>
            Add
          </Button>
        </div>
      </Paper>
    </div>
  );
}

//depois mude o prettier: Print Width
