import { Button } from "@/shared/ui"
import { GameSymbol } from "@/types"
import styles from "./game.module.css"

interface GameButtonSymbolProps {
  symbol: GameSymbol
  currentSymbol: GameSymbol
  setSymbol: React.Dispatch<React.SetStateAction<GameSymbol>>
  isGameStarted: boolean
}

export function GameButtonSymbol({ setSymbol, currentSymbol, isGameStarted, symbol }: GameButtonSymbolProps) {
  return (
    <Button
      disabled={isGameStarted}
      className={currentSymbol === symbol ? styles.activeButton : ""}
      onClick={() => setSymbol(symbol)}
    >
      {symbol}
    </Button>
  )
}
