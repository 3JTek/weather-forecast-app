import React from 'react'

const ForecastCard = ({ date, temp, weather }: IForecastCard) => (
  <div>
    <h3>{date}</h3>
    <p>Temperature: {Math.round(temp)}</p>
    <p>Weather: {weather}</p>
  </div>
)

interface IForecastCard {
  date: string
  temp: number
  weather: string
}

export default ForecastCard
