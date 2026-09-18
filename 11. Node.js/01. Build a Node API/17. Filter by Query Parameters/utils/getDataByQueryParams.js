export const getDataByQueryParams = (arr, key, val) => {
  if (key === 'is_open_to_public') {
    const boolVal = val === 'true'
    return arr.filter(x => x[key] === boolVal)
  }

  return arr.filter(x => String(x[key]).toLowerCase() === String(val).toLowerCase())
}