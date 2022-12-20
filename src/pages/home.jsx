import { List } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Form from '../componentes/Form'
import TodoItem from '../componentes/TodoItem'

export default function home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form />
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
      <TodoItem />
      </List>
    </Container>
  )
}
