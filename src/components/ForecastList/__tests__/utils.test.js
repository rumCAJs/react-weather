import { prepareForcastData, niceFormatedTimes } from '../utils'
import { getForecastData } from './data'

describe('niceFormatedTimes', () => {
  it('should nice formats given list of hours', () => {
    expect(niceFormatedTimes([6, 12, 18])).toEqual(['06:00:00', '12:00:00', '18:00:00'])
  })

  it('should prefix numbers less then ten with zero', () => {
    expect(niceFormatedTimes([6])).toEqual(['06:00:00'])
  })

  it('should return empty array', () => {
    expect(niceFormatedTimes()).toEqual([])
    expect(niceFormatedTimes(null)).toEqual([])
    expect(niceFormatedTimes([])).toEqual([])
  })
})

describe('prepareForcastData', () => {
  const data = getForecastData()

  const times = [6, 12, 18]

  const result = prepareForcastData(data, times)

  it('should return transformed object', () => {
    expect(result).toBeTruthy()
  })

  it('should have date as keys', () => {
    data.slice(1, 5).forEach(date => {
      expect(result[date.testDate]).toBeTruthy()
    })
  })

  it('should omit today', () => {
    const date = new Date()
    expect(Object.keys(result)).not.toContain(date.toISOString().split('T')[0])
  })

  it('should return max 4 days', () => {
    expect(Object.keys(result).length).toBe(4)
  })
})
