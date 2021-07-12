import React from 'react'

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

function ForecastResult({ data }: ICurrentWeatherState) {
  if (!data) return null

  const { city, current, daily } = data

  const next5DaysForecast = daily.slice(1, 6) //Here we keep only the 5 next days

  return (
    <>
      <h2>City: {city}</h2>
      <div>
        <h3>Current weather</h3>
        <p>Temperature: {Math.round(current.temp)}</p>
        <p>Weather: {current.weather[0].description}</p>
      </div>
      <ul>
        {next5DaysForecast.map((item: any) => (
          <li key={item.dt}>
            <div>
              <h3>{new Date(item.dt * 1000).toLocaleString()}</h3>
              <p>Temperature: {Math.round(item.temp.day)}</p>
              <p>Weather: {item.weather[0].description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ForecastResult
