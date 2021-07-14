import React, { useState } from 'react'

//Hooks
import useFetch from './hooks/useFetch'

// Components
import Container from './hoc/Container'
import Header from './components/Header'
import Form from './components/Form'
import ForecastFetching from './components/ForecastFetching'
import ForecastResult from './components/ForecastResult'
import ForecastError from './components/ForecastError'

function App() {
  // States
  const [inputSearch, setInputSearch] = useState('')
  const [query, setQuery] = useState('')

  // Custom hooks
  const { data, isFetching, error } = useFetch(query)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setQuery(inputSearch)

    setInputSearch('')
  }

  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <Form inputSearch={inputSearch} handleChange={handleChange} handleSubmit={handleSubmit}></Form>

        {isFetching && <ForecastFetching />}
        {error && <ForecastError error={error} />}
        {data && <ForecastResult city={query} data={data} />}
      </main>
    </Container>
  )
}

export default App
