function getFilteredData(data, locationType, location) {
    const filteredData = data.filter((destination) => {
      return destination[locationType].toLowerCase() === location.toLowerCase()
    })
    return filteredData
}

export default getFilteredData