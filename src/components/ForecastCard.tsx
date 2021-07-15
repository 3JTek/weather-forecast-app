//Style
import './ForecastCard.scss'

const ForecastCard = ({ date, temp, weatherDescription, iconUrl }: IForecastCard) => (
  <div id="forecast-card">
    <h5>{date}</h5>
    <h5>Temperature:</h5>
    <p>{Math.round(temp)}</p>
    <h5>Weather: {weatherDescription}</h5>
    <img src={iconUrl} alt={weatherDescription} />
  </div>
)

interface IForecastCard {
  date: string
  temp: number
  weatherDescription: string
  iconUrl: string
}

export default ForecastCard
