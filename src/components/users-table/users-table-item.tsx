import { Comment } from "@/types"

export function UsersTableItem({ comment }: { comment: Comment }) {
  return (
    <tr>
      <td>{comment.name}</td>
      <td>{comment.email}</td>
      <td>{comment.body}</td>
    </tr>
  )
}
