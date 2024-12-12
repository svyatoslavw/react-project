import { User } from "@/types"
import styles from "./user.module.css"

export function UserItem({ user }: { user: User }) {
  return (
    <div className={styles.item}>
      <div>
        <h6 className={styles.name}>{user.name}</h6>
        <p>{user.email}</p>
      </div>
      <a href={user.website} rel="noreferrer noopenner" target="_blank" className={styles.website}>
        {user.website}
      </a>
    </div>
  )
}
