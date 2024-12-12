import { useTodoStore } from "@/entities/todo"
import { useCallback } from "react"
import { TodoItem } from "./todo-item"
import styles from "./todo.module.css"

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useTodoStore()

  console.log("@render")

  const handleDeleteTodo = useCallback(deleteTodo, [deleteTodo])
  const handleToggleTodo = useCallback(toggleTodo, [toggleTodo])

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} deleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo} todo={todo} />
      ))}
    </div>
  )
}
export { TodoList }
