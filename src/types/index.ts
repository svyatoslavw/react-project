export interface Comment {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

export type GameSymbol = "X" | "O"
export type GameStatus = "win" | "lose" | "draw"
export type GameField = GameSymbol[][] | string[][]
export type GamePosition = { col: number; row: number }

export type Todo = {
  id: string
  title: string
  completed: boolean
}
