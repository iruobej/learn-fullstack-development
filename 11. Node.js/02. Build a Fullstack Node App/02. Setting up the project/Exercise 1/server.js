/*
Challenge: 
1. Initialise a nodejs project:
	Name: “from-the-other-side”.
    Description: “A platform for sharing ghostly encounters”.

2. Enable modular js (in package.json).

hint.md for help
*/
import http from 'node:http'
const PORT = 8000
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
    res.end(JSON.stringify('<html><h1>The server is working</h1></html>'))
})

server.listen(PORT, () => console.log(`Connected on port ${PORT}`))