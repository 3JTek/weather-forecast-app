import { render, screen } from '@testing-library/react'
import Form from './Form'

test('renders form component', () => {
  render(
    <Form
      inputSearch="query"
      handleChange={() => console.log('Handle change')}
      handleSubmit={() => console.log('Handle submit')}
    />
  )
  const inputElement = screen.getByPlaceholderText(/search/i)
  expect(inputElement).toHaveValue('query')

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
})
