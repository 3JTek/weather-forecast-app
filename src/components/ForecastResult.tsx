import React from 'react'
import moment from 'moment'

//Components
import ForecastCard from './ForecastCard'

//Style
import './ForecastResult.scss'

export const sanitizeData = (dt: number, temp: number, weather: { description: string; icon: string }[]) => ({
  date: moment(dt * 1000).format('Do MMMM '),
  temp: Math.round(temp),
  weather: weather[0].description,
  iconId: weather[0].icon,
})

const ForecastResult = ({ city, data }: ICurrentWeatherState) => {
  if (!data) return null

  const { current, daily } = data

  const currentSanitized = sanitizeData(current.dt, current.temp, current.weather)

  const next5DaysForecast = daily.slice(1, 6) //Here we keep only the 5 next days
  const next5DaysForecastSanitized = next5DaysForecast.map((item) => sanitizeData(item.dt, item.temp.day, item.weather))

  const forecastTimeline = [currentSanitized, ...next5DaysForecastSanitized]

  return (
    <div id="forecast-result">
      <h2>City: {city}</h2>

      <div className="forecast-timeline">
        {forecastTimeline.map((item: any) => (
          <React.Fragment key={item.dt}>
            <ForecastCard date={item.date} temp={item.temp} weather={item.weatherDescription} iconId={item.iconId} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

interface ICurrentWeatherState {
  city: string
  data: {
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
