import { render, screen } from '@testing-library/react'
import Header from './Header'

test('renders header component', () => {
  render(<Header />)
  const headerElement = screen.getByText(/Weather forecast application/i)
  expect(headerElement).toBeInTheDocument()
})
