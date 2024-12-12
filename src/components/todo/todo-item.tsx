import { Todo } from "@/types"
import { IconButton } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import { memo } from "react"
import styles from "./todo.module.css"

interface TodoItemProps {
  todo: Todo
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}

const TodoItem = memo(({ todo, deleteTodo, toggleTodo }: TodoItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <Checkbox onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
        <span>{todo.title}</span>
      </div>
      <IconButton size="small" color="inherit" onClick={() => deleteTodo(todo.id)}>
        ✕
      </IconButton>
    </div>
  )
})

TodoItem.displayName = "TodoItem"

export { TodoItem }
