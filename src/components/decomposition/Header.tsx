import React from 'react'
import Nav from './common/Nav'
import List from './common/List'
import News from './News'
import AdBlock from './AdBlock'
import Rate from './Rate'

/** Компонент "шапка". Отображает блок с шапкой. */
export default function Header() {
  const navItems = ['Сейчас в СМИ', 'В Германии', 'Рекомендуем']
  const news = [
    {
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      icon: 'https://cdn-icons-png.flaticon.com/128/945/945706.png',
    },
    {
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      icon: 'https://cdn-icons-png.flaticon.com/128/945/945706.png',
    },
    {
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      icon: 'https://cdn-icons-png.flaticon.com/128/945/945706.png',
    },
    {
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      icon: 'https://cdn-icons-png.flaticon.com/128/945/945706.png',
    },
    {
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
    },
  ]
  const rates = [
    { currency: 'USD MOEX', value: '63,52', change: '+0,09' },
    { currency: 'EUR MOEX', value: '63,52', change: '+0,09' },
    { currency: 'НЕФТЬ', value: '63,52', change: '+0,09%' },
  ]
  return (
    <>
      <div className='flex items-end mb-6'>
        <Nav>
          {navItems.map((item) => (
            <li>
              <a
                className='text-xl font-medium text-blue-400 hover:text-blue-800 transition-colors'
                href='#'
              >
                {item}
              </a>
            </li>
          ))}
        </Nav>
        <span className='ml-4 text-gray-400'>
          {new Date().getDay()}.{new Date().getMonth()}.
          {new Date().getFullYear()}
        </span>
      </div>
      <div className='flex gap-28'>
        <List>
          {news.map((item) => (
            <News news={item}></News>
          ))}
        </List>
        <AdBlock
          img='https://sun9-21.userapi.com/impf/EufmcFw-QcxEj-Osocp2zw1h8UE6jnjGEiC_WA/pNtGESp5iLI.jpg?size=306x302&quality=96&sign=0ad78ceb08103cf6b517e7c0d141e800&type=album'
          title='Lorem, ipsum dolor'
          description='Lorem ipsum dolor sit amet consectetur adipisicing'
        ></AdBlock>
      </div>
      <Nav>
        {rates.map((rate) => (
          <Rate rate={rate}></Rate>
        ))}
      </Nav>
    </>
  )
}
