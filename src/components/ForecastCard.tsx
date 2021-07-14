//Style
import './ForecastCard.scss'

const ForecastCard = ({ date, temp, weather, iconId }: IForecastCard) => (
  <div id="forecast-card">
    <h5>{date}</h5>
    <h5>Temperature:</h5>
    <p>{Math.round(temp)}</p>
    <h5>Weather: {weather}</h5>
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
