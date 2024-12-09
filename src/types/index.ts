export interface Comment {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

export type GameSymbol = "X" | "O"
export type GameStatus = "win" | "lose" | "draw"
export type GameField = GameSymbol[][] | string[][]
export type GamePosition = { col: number; row: number }
