import { Button, Input } from "@/shared/ui"
import styles from "./todo.module.css"

const AddTodo = () => {
  return (
    <div className={styles.addTodo}>
      <Input type="text" placeholder="New todo" />
      <Button isActive>Add</Button>
    </div>
  )
}

export { AddTodo }
