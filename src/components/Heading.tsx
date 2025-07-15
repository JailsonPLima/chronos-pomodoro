import type { ReactNode } from 'react'

import styles from './Heading.module.css'

interface IHeading {
  children: ReactNode
}

export const Heading = (props: IHeading) => {
  return <h1 className={styles.cyan}>{props.children}</h1>
}
