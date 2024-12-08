import { Header } from "@/components"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"

export function RootLayout() {
  return (
    <main className={styles.container}>
      <Header />
      <Outlet />
    </main>
  )
}
