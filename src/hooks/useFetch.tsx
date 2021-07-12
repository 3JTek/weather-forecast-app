import { useState, useEffect } from 'react'

//Config
import config from '../environment'
const { OPEN_WEATHER_API_KEY } = config

const baseUrl = 'https://api.openweathermap.org/data/2.5'

export async function http(request: RequestInfo): Promise<any> {
  const response = await fetch(request)
  const body = await response.json()
  return body
}

const useFetch = (query: string) => {
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      try {
        setIsFetching(true)

        const responseLatLon: any = await http(`${baseUrl}/weather?q=${query}&appid=${OPEN_WEATHER_API_KEY}`)

        if (responseLatLon.cod === '404') throw new Error('City not found')

        const { coord } = responseLatLon

        const lat = String(coord.lat)
        const lon = String(coord.lon)

        const responseForecast: any = await http(
          `${baseUrl}/onecall?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&exclude=minutely,hourly,alerts&units=metric`
        )

        setData(responseForecast)

        setIsFetching(false)
      } catch (err) {
        setIsFetching(false)
        setError(err.message)
      }
    }

    fetchData()
  }, [query])

  return { data, isFetching, error }
}

export default useFetch
