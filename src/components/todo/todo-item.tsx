import { Button, Input } from "@/shared/ui"
import { Todo } from "@/types"
import styles from "./todo.module.css"

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <Input type="checkbox" />
        <span>Learn React</span>
      </div>
      <Button asIcon>✕</Button>
    </div>
  )
}

export { TodoItem }
