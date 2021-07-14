import { render, screen } from '@testing-library/react'
import ForecastError from './ForecastError'

test('renders forecast error component', () => {
  render(<ForecastError error={'There is an error'} />)
  const textElement = screen.getByText(/There is an error/i)
  expect(textElement).toBeInTheDocument()
})
