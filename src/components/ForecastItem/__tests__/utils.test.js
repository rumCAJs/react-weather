import { getTimeOfDay } from '../utils'

describe('getTimeOfDay', () => {
  const date = '2019-10-03 06:00:00'
  it('should get time from ISO date fromat', () => {
    expect(getTimeOfDay(date)).toBe('06:00')
  })

  it('should be exactly 5 chars long', () => {
    expect(getTimeOfDay(date).length).toBe(5)
  })

  it('should return null if the is no time in datetime', () => {
    expect(getTimeOfDay(date.split(' ')[0])).toBeNull()
  })
})
