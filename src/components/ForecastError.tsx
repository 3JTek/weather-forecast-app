const ForecastError = ({ error }: IForecastError) => {
  return <p>{error}</p>
}

interface IForecastError {
  error: string
}

export default ForecastError
