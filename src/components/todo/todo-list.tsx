import { Todo } from "@/types"
import { useState } from "react"
import { AddTodo } from "./add-todo"
import { TodoItem } from "./todo-item"
import styles from "./todo.module.css"

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "First todo", completed: false },
    { id: "2", title: "Second todo", completed: false },
    { id: "3", title: "Third todo", completed: false }
  ])

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now().toString(), title: "New todo", completed: false }])
  }

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Todolist</h4>
      <div className={styles.todos}>
        <AddTodo />
        <div className={styles.list}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}
export { TodoList }
