import React from 'react'
import { IPrograms } from '../../../models'

interface TVprogramProps {
  program: IPrograms
}

/** Компонент "телепрограммы". Отображает элементы виджета телепрограмм. Если идет прямой эфир, вместо времени показывает иконку */
export default function TVprogram({ program }: TVprogramProps) {
  return (
    <div className='flex items-center gap-3 py-1'>
      {program.time === 'now' ? (
        <a href='#'>
          <img
            className='w-6 h-6 object-contain'
            src='https://gabrielenoindians.org/wp-content/uploads/2018/01/video-play-300x300.png'
            alt='///'
          />
        </a>
      ) : (
        <span>{program.time}</span>
      )}

      <span>{program.title}</span>
      <span className='text-gray-400'>{program.channel}</span>
    </div>
  )
}
