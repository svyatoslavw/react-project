import { debounce } from "@/shared/lib"
import { Loader } from "@/shared/ui"
import { User } from "@/types"
import { useEffect, useRef, useState } from "react"
import { UserItem } from "./user-item"
import styles from "./user.module.css"

export function UserList() {
  const [comments, setComments] = useState<User[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const isAtBottom =
        containerRef.current.scrollTop + containerRef.current.clientHeight >= containerRef.current.scrollHeight - 50

      console.log(isAtBottom)

      if (isAtBottom && !loading) {
        setLoading(true)
        setPage((prev) => prev + 1)
      }
    }

    containerRef.current?.addEventListener("scroll", handleScroll)

    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [loading, containerRef.current])

  useEffect(() => {
    setLoading(true)

    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=2&_page=${page}`)
        const data = (await response.json()) as User[]

        if (!data.length) {
          setLoading(false)
          return
        }

        setComments((prev) => [...prev, ...data])
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setLoading(false)
      }
    }

    const debounced = debounce(fetchUsers, 1_000)
    debounced()
  }, [page])

  return (
    <section className={styles.tblContainer}>
      <h1 className={styles.heading}>Infinite Scroll</h1>

      <div className={styles.tblContent} ref={containerRef}>
        {comments.map((user) => (
          <UserItem key={`${user.id}-${user.email}`} user={user} />
        ))}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }} className={styles.item}>
            <Loader width={100} height={100} />
          </div>
        )}
      </div>
    </section>
  )
}
