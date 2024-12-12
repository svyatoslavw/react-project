import { RootLayout } from "@/components"
import { HomePage } from "@/pages"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "tic-tac-toe",
        lazy: async () => {
          const { GamePage } = await import("../pages/game/game-page")
          return { Component: GamePage, loader: () => <div>sdsd</div> }
        }
      },
      {
        path: "*",
        element: <div>404</div>
      }
    ]
  }
])
