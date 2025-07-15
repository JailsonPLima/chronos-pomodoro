import type { ReactNode } from 'react'

import styles from './styles.module.css'

interface IHeadingProps {
  children: ReactNode
}

export const Heading = ({ children }: IHeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>
}
