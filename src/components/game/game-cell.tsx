import { memo } from "react"
import styles from "./game.module.css"

interface GameCellProps {
  row: string
  rowIdx: number
  clickedCell: boolean
  columnIdx: number
  selectCellSymbol: (colIdx: number, rowIdx: number) => void
}

function GameCell({ columnIdx, row, rowIdx, clickedCell, selectCellSymbol }: GameCellProps) {
  return (
    <div
      key={rowIdx}
      onClick={() => selectCellSymbol(columnIdx, rowIdx)}
      className={`${styles.cell} ${clickedCell ? styles.updatedCell : ""}`}
    >
      {row}
    </div>
  )
}

export default memo(GameCell)
