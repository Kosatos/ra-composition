import React from 'react'

interface BannerProps {
  url: string
}

/** Компонент "Banner". Отображает рекламный баннер в виде ссылки. */
export default function Banner({ url }: BannerProps) {
  return (
    <a href='#'>
      <img className='w-4/5 h-40 object-cover' src={url} alt='///' />
    </a>
  )
}
