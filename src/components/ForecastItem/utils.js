const getTimeOfDay = txt => {
  const re = /^.*?\s(.{5}).*$/
  if (!txt.match(re)) {
    return null
  }

  return txt.replace(re, '$1')
}

export { getTimeOfDay }
