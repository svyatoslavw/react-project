import { useTodoStore } from "@/entities/todo"
import { Button, Input } from "@/shared/ui"
import { useCallback, useState } from "react"
import styles from "./todo.module.css"

const AddTodo = () => {
  const [title, setTitle] = useState("")

  const addTodo = useTodoStore((state) => state.addTodo)

  const handleAddTodo = () => useCallback(() => addTodo({ title }), [addTodo, title])

  return (
    <div className={styles.addTodo}>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="New todo" />
      <Button onClick={handleAddTodo} isActive>
        Add
      </Button>
    </div>
  )
}

export { AddTodo }
