import React, { forwardRef } from "react"
import styles from "./input.module.css"

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>((props, ref) => (
  <input className={styles.input} ref={ref} {...props} />
))

export { Input }
