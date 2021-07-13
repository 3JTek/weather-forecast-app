import React from 'react'

//Components
import ForecastCard from './ForecastCard'

const ForecastResult = ({ data }: ICurrentWeatherState) => {
  const sanitizeData = (dt: number, temp: number, weather: { description: string; icon: string }[]) => ({
    date: new Date(dt * 1000).toLocaleString(),
    temp: Math.round(temp),
    weather: weather[0].description,
    iconId: weather[0].icon,
  })

  if (!data) return null

  const { city, current, daily } = data

  const currentSanitized = sanitizeData(current.dt, current.temp, current.weather)

  const next5DaysForecast = daily.slice(1, 6) //Here we keep only the 5 next days
  const next5DaysForecastSanitized = next5DaysForecast.map((item) => sanitizeData(item.dt, item.temp.day, item.weather))

  const forecastTimeline = [currentSanitized, ...next5DaysForecastSanitized]

  return (
    <>
      <h2>City: {city}</h2>

      {forecastTimeline.map((item: any) => (
        <React.Fragment key={item.dt}>
          <ForecastCard date={item.date} temp={item.temp} weather={item.weatherDescription} iconId={item.iconId} />
        </React.Fragment>
      ))}
    </>
  )
}

interface ICurrentWeatherState {
  data: {
    city: string
    current: {
      dt: number
      temp: number
      weather: { description: string; icon: string }[]
    }
    daily: {
      dt: number
      temp: { day: number }
      weather: { description: string; icon: string }[]
    }[]
  } | null
}

export default ForecastResult
