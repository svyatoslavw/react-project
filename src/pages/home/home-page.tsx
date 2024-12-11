import { UserList } from "@/components"
import { TodoList } from "@/components/todo"
import styles from "./home-page.module.css"

export function HomePage() {
  return (
    <div className={styles.page}>
      <UserList />
      <TodoList />
    </div>
  )
}
