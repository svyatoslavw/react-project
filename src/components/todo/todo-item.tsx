import { Button, Input } from "@/shared/ui"
import { Todo } from "@/types"
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
        <Input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
        <span>{todo.title}</span>
      </div>
      <Button onClick={() => deleteTodo(todo.id)} asIcon>
        ✕
      </Button>
    </div>
  )
})

TodoItem.displayName = "TodoItem"

export { TodoItem }
