export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    
    // 'allow access from any domain using any port or protocol as long as they are using the GET method'
    // needed for CORS
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}