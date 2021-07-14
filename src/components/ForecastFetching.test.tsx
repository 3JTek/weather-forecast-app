import { render, screen } from '@testing-library/react'
import ForecastFetching from './ForecastFetching'

test('renders forecast fetching component', () => {
  render(<ForecastFetching />)
  const textElement = screen.getByText(/Searching for your city's forecast/i)
  expect(textElement).toBeInTheDocument()
})
