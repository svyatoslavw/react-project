import { forwardRef } from "react"
import styles from "./button.module.css"

interface ButtonProps extends React.ComponentProps<"button"> {
  asIcon?: boolean
  isActive?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, isActive, asIcon, ...props }, ref) => (
  <button
    ref={ref}
    className={`${asIcon ? styles.icon : styles.button}${isActive ? ` ${styles.active}` : ""} ${className || ""}`}
    {...props}
  />
))
