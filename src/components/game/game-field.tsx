import { GameField as GameFieldType, GamePosition } from "@/types"
import { useCallback } from "react"
import GameCell from "./game-cell"
import styles from "./game.module.css"

interface GameFieldProps {
  field: GameFieldType
  clickedCell: GamePosition | null
  selectCellSymbol: (colIdx: number, rowIdx: number) => void
}

export function GameField({ field, clickedCell, selectCellSymbol }: GameFieldProps) {
  const isClickedCell = useCallback(
    (colIdx: number, rowIdx: number) => {
      return clickedCell?.col === colIdx && clickedCell?.row === rowIdx
    },
    [clickedCell]
  )

  return (
    <section className={styles.board}>
      {field.map((col, colIdx) => (
        <div className={styles.column}>
          {col.map((row, rowIdx) => (
            <GameCell
              clickedCell={isClickedCell(colIdx, rowIdx)}
              key={rowIdx}
              columnIdx={colIdx}
              rowIdx={rowIdx}
              row={row}
              selectCellSymbol={selectCellSymbol}
            />
          ))}
        </div>
      ))}
    </section>
  )
}
