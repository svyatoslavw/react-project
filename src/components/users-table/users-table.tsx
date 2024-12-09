import { debounce } from "@/shared/lib"
import { Loader } from "@/shared/ui"
import { Comment } from "@/types"
import { useEffect, useRef, useState } from "react"
import { UsersTableItem } from "./users-table-item"
import styles from "./users-table.module.css"

export function Table() {
  const [comments, setComments] = useState<Comment[]>([])
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
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`)
        const data = (await response.json()) as Comment[]
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
      <div>
        <div className={styles.tblHeader}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className={styles.tblContent} ref={containerRef}>
          <table>
            <tbody>
              {comments.map((comment, index) => (
                <UsersTableItem key={`${comment.id}-${index}`} comment={comment} />
              ))}
            </tbody>
            {loading && (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  <Loader width={200} height={100} />
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </section>
  )
}
