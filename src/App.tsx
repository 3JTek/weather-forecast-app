import React, { useState } from 'react'

import useFetch from './hooks/useFetch'

// Components
import ForecastResult from './components/ForecastResult'

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

  console.log('Rendering App', data, query)

  return (
    <div className="App">
      <h1>Weather forecast application</h1>
      <h2>Type a city to find out the forecast</h2>
      <form onSubmit={handleSubmit}>
        <label>City</label>

        <input id="city" name="city" value={inputSearch} onChange={handleChange} />
        <button>Search</button>
      </form>

      {isFetching && <p>Fetching forecast...</p>}
      {error && <p>{error}</p>}
      {data && <ForecastResult data={data} />}
    </div>
  )
}

export default App
