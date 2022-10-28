import { IVisitedItems, IPrograms } from '../models'

export const visitedItems: IVisitedItems[] = [
  { title: 'Недвижимость', description: 'О сталинках' },
  { title: 'Маркет', description: 'Люстры и светильники' },
  { title: 'Авто.ру', description: 'привод 4х4 до 500 000' },
]
export const programs: IPrograms[] = [
  { time: '11:00', title: 'Comedu Club', channel: 'ТНТ' },
  { time: '12:00', title: 'Рик и Морти', channel: '2х2' },
  { time: '13:00', title: 'Футбол', channel: 'МатчТВ' },
]
export const programsNow: IPrograms[] = [
  { time: 'now', title: 'Comedu Club', channel: 'ТНТ' },
  { time: 'now', title: 'Рик и Морти', channel: '2х2' },
  { time: 'now', title: 'Футбол', channel: 'МатчТВ' },
]
