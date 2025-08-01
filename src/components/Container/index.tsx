import type { ReactNode } from 'react'

import styles from './styles.module.css'

interface IContainerProps {
  children: ReactNode
}

export const Container = ({ children }: IContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
