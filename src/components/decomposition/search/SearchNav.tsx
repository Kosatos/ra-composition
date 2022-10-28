import React from 'react'
import Nav from '../common/Nav'

/** Компонент "SearchNav". Отображает блок с навигацией к форме поиска. */
export default function SearchNav() {
  const navItems = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир',
    'еще',
  ]
  return (
    <Nav>
      {navItems.map((item) => (
        <li>
          <a
            className='text-blue-500 text-lg font-medium hover:text-blue-800 transition-colors'
            href='#'
          >
            {item}
          </a>
        </li>
      ))}
    </Nav>
  )
}
