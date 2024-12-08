import { Home } from "@/pages"
import { RootLayout } from "@/widgets"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "weather",
        lazy: async () => {
          const { Weather } = await import("../pages/weather/weater")
          return { Component: Weather, loader: () => <div>sdsd</div> }
        }
      },
      {
        path: "tic-tac-toe",
        lazy: async () => {
          const { TicTacToe } = await import("../pages/tic-tac-toe/tic-tac-toe")
          return { Component: TicTacToe, loader: () => <div>sdsd</div> }
        }
      },
      {
        path: "*",
        element: <div>404</div>
      }
    ]
  }
])
