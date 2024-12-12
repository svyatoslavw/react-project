import { Todo } from "@/types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const todos: Todo[] = [
  {
    id: "1",
    title: "First todo",
    completed: false
  },
  {
    id: "2",
    title: "Second todo",
    completed: true
  },
  {
    id: "3",
    title: "Third todo",
    completed: false
  }
]

type TodoState = {
  todos: Todo[]
  addTodo: (todo: Pick<Todo, "title">) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  reset: () => void
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos,
      addTodo: (todo: Pick<Todo, "title">) =>
        set((state) => ({ todos: [...state.todos, { id: Date.now().toString(), completed: false, ...todo }] })),

      deleteTodo: (id: string) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        })),

      reset: () => set({ todos })
    }),
    {
      name: "todos",
      version: 1,
      storage: createJSONStorage(() => localStorage)
    }
  )
)
