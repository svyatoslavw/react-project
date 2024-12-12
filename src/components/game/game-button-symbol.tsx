import { GameSymbol } from "@/types"
import Button from "@mui/material/Button"

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
      variant={currentSymbol === symbol ? "contained" : "outlined"}
      onClick={() => setSymbol(symbol)}
    >
      {symbol}
    </Button>
  )
}
