import { sanitizeData } from './ForecastResult'

test('Sanitize data function from the forecast result component', () => {
  const result = sanitizeData(1626135342, 12.4, [{ description: 'cloudy', icon: '14d' }])

  expect(result.date).toEqual('13th July ')
  expect(result.temp).toEqual(12)
  expect(result.weather).toEqual('cloudy')
  expect(result.iconId).toEqual('14d')
})
