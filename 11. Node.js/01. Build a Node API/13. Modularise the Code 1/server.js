import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import setResponse from './utils/setResponse.js'

const PORT = 8000

/*
Challenge:
  1. Create a utility function to make this code DRYer.
  2. Delete unnecessary code.
*/

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()
  //gives the http object res a setResponse method, and assigns my custom setResponse method to it
  res.setResponse = setResponse 

  if (req.url === '/api' && req.method === 'GET') {
    res.setResponse(200, destinations)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

    const continent = decodeURIComponent(req.url.split('/').pop())
    const filteredData = destinations.filter((destination) => {
      return destination.continent.toLowerCase() === continent.toLowerCase()
    })
    res.setResponse(200, filteredData)
  } else {
    res.setResponse(404, {
      error: "not found",
      message: "The requested route does not exist"
    })
  }
  
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
