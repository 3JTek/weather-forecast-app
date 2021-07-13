import React from 'react'

//Components
import ForecastCard from './ForecastCard'

const ForecastResult = ({ data }: ICurrentWeatherState) => {
  if (!data) return null

  const { city, current, daily } = data

  const next5DaysForecast = daily.slice(1, 6) //Here we keep only the 5 next days

  return (
    <>
      <h2>City: {city}</h2>

      <ForecastCard date="Current time" temp={Math.round(current.temp)} weather={current.weather[0].description} />

      {next5DaysForecast.map((item: any) => (
        <React.Fragment key={item.dt}>
          <ForecastCard
            date={new Date(item.dt * 1000).toLocaleString()}
            temp={Math.round(item.temp.day)}
            weather={item.weather[0].description}
          />
        </React.Fragment>
      ))}
    </>
  )
}

interface ICurrentWeatherState {
  data: {
    city: string
    current: {
      temp: number
      weather: { description: string }[]
    }
    daily: {
      temp: { day: number }
      weather: { description: string }[]
    }[]
  } | null
}

export default ForecastResult
