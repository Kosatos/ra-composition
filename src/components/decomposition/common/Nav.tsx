import React from 'react'

interface NavProps {
  children: React.ReactNode
}

/** Компонент "Nav". Отображает список по горизонтали. */
export default function Nav({ children }: NavProps) {
  return <ul className='flex gap-4'>{children}</ul>
}
