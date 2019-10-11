const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const fetchData = (url, options = {}) => {
  url += '&units=metric&appid=1045d8be61103660466df26e7ded58c1'
  return fetch(url, {
    method: 'GET',
    ...options
  })
    .then(res => {
      if (res.status > 400 || res.ok === false) {
        const err = new Error()
        err.status = res.status
        let message = 'Unable to obtain data, please try again'
        if (e.status >= 500) {
          message = 'Internal server error, please try again later'
        }
        err.message = message
        throw err
      }
      return res
    })
    .then(res => res.json())
}

const getLocationData = locationId => fetchData(`${BASE_URL}weather?q=${locationId}`)

const getLocationByName = location => fetchData(`${BASE_URL}weather?q=${encodeURI(location)}`)

const getLocationById = id => fetchData(`${BASE_URL}weather?id=${id}`)

const getSuggestions = location =>
  fetchData(`${BASE_URL}find?q=${encodeURI(location)}&type=like&sort=population&cnt=30`)

const getForecast = locationId => fetchData(`${BASE_URL}forecast?id=${encodeURI(locationId)}`)

export { getLocationData, getLocationByName, getSuggestions, getLocationById, getForecast }
