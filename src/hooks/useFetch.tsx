import { useReducer, useEffect } from 'react'

//Config
import config from '../environment'
const { OPEN_WEATHER_API_KEY } = config

const baseUrl = 'https://api.openweathermap.org/data/2.5'

//Helper to extract the fetch response body in JSON
export async function http(request: RequestInfo): Promise<any> {
  const response = await fetch(request)
  const body = await response.json()
  return body
}

//Initial reducer state
const initialState = {
  data: null,
  isFetching: false,
  error: null,
}

//API reducer
const fetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, data: null, isFetching: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, isFetching: false, error: null }
    case 'FETCH_FAILURE':
      return { ...state, data: null, isFetching: false, error: action.payload }
    default:
      throw new Error('Action type is invalid')
  }
}

//Custom API hook
const useFetch = (query: string) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_INIT' })

        const responseLatLon: any = await http(`${baseUrl}/weather?q=${query}&appid=${OPEN_WEATHER_API_KEY}`)

        if (responseLatLon.cod === '404') throw new Error('City not found')

        const { coord } = responseLatLon

        const lat = String(coord.lat)
        const lon = String(coord.lon)

        const responseForecast: any = await http(
          `${baseUrl}/onecall?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&exclude=minutely,hourly,alerts&units=metric`
        )

        dispatch({ type: 'FETCH_SUCCESS', payload: responseForecast })
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE', payload: err.message })
      }
    }

    fetchData()
  }, [query])

  return { ...state }
}

interface State {
  data: object | null
  isFetching: boolean
  error: string | null
}

interface Action {
  type: 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILURE'
  payload?: any
}

export default useFetch
