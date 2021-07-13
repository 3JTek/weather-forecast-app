import React from 'react'

const ForecastCard = ({ date, temp, weather, iconId }: IForecastCard) => (
  <div>
    <h3>{date}</h3>
    <p>Temperature: {Math.round(temp)}</p>
    <p>Weather: {weather}</p>
    <img src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} alt={weather} />
  </div>
)

interface IForecastCard {
  date: string
  temp: number
  weather: string
  iconId: string
}

export default ForecastCard
