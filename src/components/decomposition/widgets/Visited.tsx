import React from 'react'
import { IVisitedItems } from '../../../models'

interface VisitedProps {
  visited: IVisitedItems
}

/** Компонент "посещаемое". Отображает элементы виджета посещаемого. */
export default function Weather({ visited }: VisitedProps) {
  return (
    <a className='py-1' href='#'>
      <b className='font-bold'>{visited.title}</b> - {visited.description}
    </a>
  )
}
