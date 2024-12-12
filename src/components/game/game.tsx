import { GameModal } from "@/components/game/game-modal"
import { winningConditions } from "@/shared/constants"
import { debounce } from "@/shared/lib"
import { GameField as GameFieldType, GamePosition, GameStatus, GameSymbol } from "@/types"
import Button from "@mui/material/Button"
import { useCallback, useEffect, useMemo, useState } from "react"
import { GameButtonSymbol } from "./game-button-symbol"
import { GameField } from "./game-field"
import styles from "./game.module.css"

const EMPTY_FIELD = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

const Game = () => {
  const [field, setField] = useState<GameFieldType>(EMPTY_FIELD)

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isUserChoice, setIsUserChoice] = useState(true)
  const [symbol, setSymbol] = useState<GameSymbol>("X")
  const [status, setStatus] = useState<GameStatus | null>(null)
  const [clickedCell, setClickedCell] = useState<GamePosition | null>(null)

  const botSymbol = useMemo(() => (symbol === "X" ? "O" : "X"), [symbol])

  const startNewGame = useCallback(() => {
    setField(EMPTY_FIELD)
    setIsGameStarted(true)
    setIsUserChoice(true)
  }, [])

  const endGame = useCallback(() => {
    setIsGameStarted(false)
    setStatus(null)
  }, [])

  const checkWin = useCallback(() => {
    for (const condition of winningConditions) {
      const [cell1, cell2, cell3] = condition

      if (
        field[cell1[0]][cell1[1]] &&
        field[cell1[0]][cell1[1]] === field[cell2[0]][cell2[1]] &&
        field[cell2[0]][cell2[1]] === field[cell3[0]][cell3[1]]
      ) {
        const winnerSymbol = field[cell1[0]][cell1[1]]
        if (winnerSymbol === symbol) {
          setStatus("win")
          return "user"
        } else if (winnerSymbol === botSymbol) {
          setStatus("lose")
          return "bot"
        }
      }
    }

    if (field.every((col) => col.every((row) => row !== ""))) {
      setStatus("draw")
      return "draw"
    }

    setStatus(null)
    return null
  }, [field, symbol, botSymbol])

  const selectCellSymbol = useCallback(
    (colIdx: number, rowIdx: number) => {
      if (!isUserChoice || !isGameStarted || checkWin()) return

      if (field[colIdx][rowIdx] !== "") return

      setField((prev) =>
        prev.map((col, idx) => (idx === colIdx ? col.map((row, rIdx) => (rIdx === rowIdx ? symbol : row)) : col))
      )
      setIsUserChoice(false)
      setClickedCell({ col: colIdx, row: rowIdx })
    },
    [isUserChoice, field, symbol, isGameStarted]
  )

  const botRandomChoice = useCallback(() => {
    const randomColIdx = Math.floor(Math.random() * 3)
    const randomRowIdx = Math.floor(Math.random() * 3)

    if (field.every((col) => col.every((row) => row !== ""))) return

    if (field[randomColIdx][randomRowIdx] === "") {
      setField((prev) =>
        prev.map((col, idx) =>
          idx === randomColIdx ? col.map((row, rIdx) => (rIdx === randomRowIdx ? botSymbol : row)) : col
        )
      )
      setIsUserChoice(true)
      setClickedCell({ col: randomColIdx, row: randomRowIdx })
    } else {
      botRandomChoice()
    }
  }, [field, botSymbol])

  useEffect(() => {
    if (isUserChoice || checkWin()) return

    botRandomChoice()
  }, [isUserChoice])

  useEffect(() => {
    const newWinner = checkWin()
    if (newWinner) {
      const debouncedEndGame = debounce(endGame, 4000)
      debouncedEndGame()
    }
  }, [field, isUserChoice])

  useEffect(() => {
    if (clickedCell) {
      const timerId = setTimeout(() => setClickedCell(null), 500)
      return () => clearTimeout(timerId)
    }
  }, [clickedCell])

  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <h4>Выберите сторону!</h4>
        <div className={styles.buttons}>
          <GameButtonSymbol isGameStarted={isGameStarted} setSymbol={setSymbol} currentSymbol={symbol} symbol="X" />
          <GameButtonSymbol isGameStarted={isGameStarted} setSymbol={setSymbol} currentSymbol={symbol} symbol="O" />
        </div>
      </section>
      <GameField field={field} clickedCell={clickedCell} selectCellSymbol={selectCellSymbol} />
      {status && <GameModal status={status} />}
      <Button disabled={isGameStarted} variant={!isGameStarted ? "contained" : "outlined"} onClick={startNewGame}>
        Start New Game
      </Button>
    </div>
  )
}

export default Game
