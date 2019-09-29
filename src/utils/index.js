const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const getWeekDay = date => WEEK_DAYS[date.getDay()]

const getNiceDate = date => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

export { getWeekDay, getNiceDate }
