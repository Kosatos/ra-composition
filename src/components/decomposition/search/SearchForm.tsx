import React from 'react'

interface SearchFormProps {
  children?: React.ReactNode
}

/** Компонент "SearchInput". Отображает форму поиска. */
export default function SearchForm({ children }: SearchFormProps) {
  return (
    <form className='flex w-full relative mt-3'>
      {children}
      <input
        id='search'
        className='w-4/5 p-3 border-4 border-yellow-500'
        type='text'
      />
      <button className='w-1/5 p-3 border-0 bg-yellow-500 text-xl font-medium'>
        Найти
      </button>
      <label htmlFor='search' className='absolute -bottom-8 left-0'>
        Найдется все.
      </label>
    </form>
  )
}
