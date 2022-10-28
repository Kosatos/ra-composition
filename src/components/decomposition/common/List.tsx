import React from 'react'

interface ListProps {
  children: React.ReactNode
}

/** Компонент "List". Отображает список по вертикали. */
export default function List({ children }: ListProps) {
  return <ul className='flex flex-col gap-2'>{children}</ul>
}
