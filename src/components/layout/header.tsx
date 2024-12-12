import { NavLink } from "react-router-dom"
import styles from "./layout.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>React Project</h1>
      <nav className={styles.navigation}>
        <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          Home
        </NavLink>
        <NavLink to={"/tic-tac-toe"} className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
          Game
        </NavLink>
      </nav>
    </header>
  )
}
