import { AddTodo } from "./add-todo"
import { TodoList } from "./todo-list"
import styles from "./todo.module.css"

const Todos = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Todolist</h4>
      <div className={styles.todos}>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  )
}

export { Todos }
