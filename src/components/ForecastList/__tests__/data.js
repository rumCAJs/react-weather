const getForecastData = () =>
  Array(6)
    .fill()
    .map((_, i) => {
      const date = new Date()
      date.setDate(date.getDate() + i)
      date.setHours(14)
      date.setMinutes(0)
      date.setSeconds(0)

      return {
        dt_txt: date
          .toISOString()
          .replace('T', ' ')
          .replace(/\..*$/, ''),
        testDate: date.toISOString().split('T')[0],
        main: {
          temp: 18
        }
      }
    })

export { getForecastData }
