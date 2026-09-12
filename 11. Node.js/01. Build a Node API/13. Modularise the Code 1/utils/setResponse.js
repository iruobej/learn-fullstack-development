export default function setResponse (code, response) {
    this.setHeader('Content-Type', 'application/json')
    this.statusCode = code
    this.end(JSON.stringify(response))
}