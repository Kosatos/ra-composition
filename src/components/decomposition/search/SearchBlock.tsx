import React from 'react'
import SearchNav from './SearchNav'
import SearchForm from './SearchForm'

/** Компонент "SearchBlock". Отображает блок с формой поиска и навигацией. */
export default function SearchBlock() {
  return (
    <div>
      <SearchNav></SearchNav>
      <SearchForm>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Yandex_logo_en.svg/440px-Yandex_logo_en.svg.png'
          alt='Yandex'
          className='absolute h-full object-contain top-0 -left-40'
        />
      </SearchForm>
    </div>
  )
}
