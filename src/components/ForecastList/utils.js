const niceFormatedTimes = (times = []) => (times ? times.map(num => `${(num < 10 ? '0' : '') + num}:00:00`) : [])

const prepareForcastData = (list, times = []) => {
  const whiteListTimes = niceFormatedTimes(times)
  const currentIsoDate = new Date().toISOString().split('T')[0]

  return list
    .filter(chunk => !chunk.dt_txt.includes(currentIsoDate))
    .reduce((acc, chunk) => {
      const [key, time] = chunk.dt_txt.split(' ')
      if (!whiteListTimes.includes(time) || (!acc[key] && Object.keys(acc).length === 4)) {
        return acc
      }
      if (!acc[key]) {
        acc[key] = []
      }

      acc[key].push(chunk)

      return acc
    }, {})
}

export { prepareForcastData, niceFormatedTimes }
