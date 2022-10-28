import React from 'react'

interface NewsProps {
  news: {
    title: string
    icon?: string
  }
}

/** Компонент "новость". Отображает ссылку на новость с иконкой или без. */
export default function Link({ news }: NewsProps) {
  return (
    <a href='#' className='relative text-gray-700 text-md'>
      {news.icon && (
        <img
          src={news.icon}
          alt={news.title}
          className='absolute w-4 h-4 top-1/2 -translate-y-1/2 -left-6'
        />
      )}
      {news.title}
    </a>
  )
}
