import { forwardRef } from "react"
import styles from "./button.module.css"

export const Button = forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(({ className, ...props }, ref) => (
  <button ref={ref} className={`${styles.button} ${className || ""}`} {...props} />
))
