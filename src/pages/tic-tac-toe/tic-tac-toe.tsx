import { useEffect, useState } from "react"
import styles from "./tic-tac-toe.module.css"

export function TicTacToe() {
  const [field, setField] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ])

  const [isUserChoice, setIsUserChoice] = useState(true)

  const winConditions = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [0, 1, 2],
    [2, 1, 0]
  ]

  const checkWin = () => {
    return winConditions.some((condition) => {
      return condition.some(
        (idx) => field.every((col) => col[idx] === "X") || field.every((col) => col[idx] === "O")
      )
    })
  }

  const selectCellSymbol = (colIdx: number, rowIdx: number) => {
    if (!isUserChoice) return

    // if (field[colIdx][rowIdx] !== "") return

    setField((prev) =>
      prev.map((col, idx) =>
        idx === colIdx ? col.map((row, rIdx) => (rIdx === rowIdx ? "X" : row)) : col
      )
    )

    setIsUserChoice(false)
  }

  const botRandomChoice = () => {
    const randomColIdx = Math.floor(Math.random() * 3)
    const randomRowIdx = Math.floor(Math.random() * 3)

    if (field.every((col) => col.every((row) => row !== ""))) return

    if (field[randomColIdx][randomRowIdx] === "") {
      setField((prev) =>
        prev.map((col, idx) =>
          idx === randomColIdx ? col.map((row, rIdx) => (rIdx === randomRowIdx ? "O" : row)) : col
        )
      )
      setIsUserChoice(true)
    } else {
      botRandomChoice()
    }
  }

  useEffect(() => {
    if (isUserChoice) return

    botRandomChoice()
  }, [field])

  useEffect(() => {
    if (checkWin()) {
      alert("You win!")
    }
  }, [field])

  return (
    <div className={styles.container}>
      {field.map((col, colIdx) => (
        <div key={colIdx} className={styles.column}>
          {col.map((row, rowIdx) => (
            <div
              key={rowIdx}
              onClick={() => selectCellSymbol(colIdx, rowIdx)}
              className={styles.cell}
            >
              {row}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
