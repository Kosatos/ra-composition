import React from 'react'

interface WeatherProps {
  weather: {
    icon?: string
    temp: string
    other: string
  }
}

/** Компонент "погода". Отображает элементы виджета погоды. */
export default function Weather({ weather }: WeatherProps) {
  return (
    <div className='flex gap-2'>
      <img
        className='w-16 h-16 object-contain'
        src='https://cdn4.iconfinder.com/data/icons/weather-line-2/64/rain_wind_weather_forecast_report_temperature-256.png'
        alt='weather-icon'
      />
      <span className='text-2xl font-bold'>{weather.temp}</span>
      <span>{weather.other}</span>
    </div>
  )
}
