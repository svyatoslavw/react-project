import { GameStatus } from "@/types"
import { createPortal } from "react-dom"
import styles from "./game.module.css"
export function GameModalContent({ status }: { status: GameStatus }) {
  return (
    <div className={styles.modal}>
      <section>
        <h4>
          {status === "win" && "Вы выиграли!"}
          {status === "lose" && "Вы проиграли!"}
          {status === "draw" && "Ничья!"}
        </h4>
      </section>
    </div>
  )
}

export function GameModal({ status }: { status: GameStatus }) {
  return <>{!!status && createPortal(<GameModalContent status={status} />, document.body)}</>
}
