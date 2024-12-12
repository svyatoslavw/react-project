import { Todos, UserList } from "@/components"
import styles from "./home.module.css"

export function HomePage() {
  return (
    <div className={styles.page}>
      <UserList />
      <Todos />
    </div>
  )
}
