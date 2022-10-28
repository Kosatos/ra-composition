import React from 'react'

interface WidgetProps {
  children: React.ReactNode
  title: string
  icon?: string
}

/** Компонент "виджет". Отображает виджет с вложенным контентом. */
export default function Widget({ children, title, icon }: WidgetProps) {
  return (
    <div className='max-w-sm [&:not(:last-child)]:mb-4'>
      <div className='flex items-center gap-2'>
        <h3 className='text-xl font-bold text-blue-500 mb-2'>{title}</h3>
        {icon && <img src={icon} alt='///' />}
      </div>

      {children}
    </div>
  )
}
