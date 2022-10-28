import React from 'react'

interface AdBlockProps {
  img: string
  title: string
  description: string
}

/** Компонент "рекламный блок". Отображает блок с рекламой в виде ссылки. */
export default function AdBlock({ img, title, description }: AdBlockProps) {
  return (
    <a href='#'>
      <img
        src={img}
        alt={title}
        className='w-[150px] h-[150px] object-cover rounded-full'
      />
      <h3 className='text-blue-500 font-bold text-xl py-2'>{title}</h3>
      <p>{description}</p>
    </a>
  )
}
