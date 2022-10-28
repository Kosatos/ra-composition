import React from 'react'
import styles from './index.module.scss'

interface CardProps {
  children: React.ReactNode
  title: string
  text: string
}

export default function Card({ children, title, text }: CardProps) {
  return (
    <div className={styles.card}>
      {children}
      <div className={styles.card__body}>
        <h5 className={styles.card__title}>{title}</h5>
        <p className={styles.card__text}>{text}</p>
        <button className={styles.card__btn}>Go somewhere</button>
      </div>
    </div>
  )
}
