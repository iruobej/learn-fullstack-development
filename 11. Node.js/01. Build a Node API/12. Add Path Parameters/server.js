import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {

    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destinations))

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

    let continentIndex = req.url.lastIndexOf('/') + 1
    let continent = req.url.slice(continentIndex)
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destinations.filter(x => x.continent.toLowerCase() === continent.toLowerCase())))
  /*
  Challenge:
  1. Check if the url starts with “/api/continent”.
    (Is there a JS method that allows you to check what a string starts with?)

  2. If it does, serve only items from that continent.
    (How can you get to what comes after the final slash?)
    (What method can you use to filter data?)
  */
    } else {

      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 404
      res.end(JSON.stringify({
          error: "not found",
          message: "The requested route does not exist"
        })
      )

  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
