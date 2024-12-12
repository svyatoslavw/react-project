import { useTodoStore } from "@/entities/todo"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useState } from "react"
import styles from "./todo.module.css"

const AddTodo = () => {
  const [title, setTitle] = useState("")

  const addTodo = useTodoStore((state) => state.addTodo)

  return (
    <div className={styles.addTodo}>
      <TextField
        color="primary"
        size="small"
        placeholder="New todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTodo({ title })}>
        Add
      </Button>
    </div>
  )
}

export { AddTodo }
