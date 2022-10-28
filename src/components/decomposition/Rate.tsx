import React from 'react'

interface RateProps {
  rate: {
    currency: string
    value: string
    change: string
  }
}

/** Компонент "курс". Отображает элемент с курсом. */
export default function Rate({ rate }: RateProps) {
  return (
    <div className='flex gap-2 py-4'>
      <span className='font-bold'>{rate.currency}</span>
      <span>{rate.value}</span>
      <span className='text-gray-400'>{rate.change}</span>
    </div>
  )
}
