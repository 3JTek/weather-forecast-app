import { render, screen } from '@testing-library/react'
import ForecastCard from './ForecastCard'

test('renders forecast card component', () => {
  render(
    <ForecastCard
      date="22nd July"
      temp={24}
      weatherDescription="cloudy"
      iconUrl="http://openweathermap.org/img/wn/4d@2x.png"
    />
  )

  const dateElement = screen.getByText(/22nd July/i)
  expect(dateElement).toBeInTheDocument()

  const tempElement = screen.getByText(/24/i)
  expect(tempElement).toBeInTheDocument()

  const weatherElement = screen.getByText(/cloudy/i)
  expect(weatherElement).toBeInTheDocument()

  const iconElement = screen.getByAltText(/cloudy/i)
  expect(iconElement).toHaveAttribute('src', `http://openweathermap.org/img/wn/4d@2x.png`)
})
