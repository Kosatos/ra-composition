import React from 'react'
import { visitedItems, programs, programsNow } from '../../data/decomposition'
import Header from './Header'
import SearchBlock from './search/SearchBlock'
import Banner from './Banner'
import List from './common/List'
import Widget from './Widget'
import Weather from './widgets/Weather'
import TVprogram from './widgets/TVprogram'
import Visited from './widgets/Visited'

export default function Decomposition() {
  return (
    <>
      <Header></Header>
      <SearchBlock></SearchBlock>
      <div className='mt-10'>
        <Banner url='https://global-skinali.ru/assets/images/resources/10/large/skinali-3737.jpg'></Banner>
      </div>
      <div className='flex gap-20 mt-10'>
        <List>
          <Widget title='Погода'>
            <Weather
              weather={{ temp: '+10°', other: '+10 ночью, +11 утром' }}
            ></Weather>
          </Widget>
          <Widget title='Посещаемое'>
            <List>
              {visitedItems.map((item) => (
                <Visited visited={item}></Visited>
              ))}
            </List>
          </Widget>
        </List>
        <List>
          <Widget title='Карта Германии'>
            <a href='#'>Расписания</a>
          </Widget>
          <Widget title='Телепрограмма'>
            <List>
              {programs.map((program) => (
                <TVprogram program={program}></TVprogram>
              ))}
            </List>
          </Widget>
        </List>
        <List>
          <Widget title='Эфир'>
            <List>
              {programsNow.map((program) => (
                <TVprogram program={program}></TVprogram>
              ))}
            </List>
          </Widget>
        </List>
      </div>
    </>
  )
}
