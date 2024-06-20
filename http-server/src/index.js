const http = require('http');

const routes = require('./routes');

const server = http.createServer((req, res) => {
    console.log(`Request method: ${req.method} | Endpoint: ${req.url}`)

    const route = routes.find(route => route.method === req.method && route.endpoint === req.url)

    if (route) {
        route.handler(req, res)
        return;
    }
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(`Cannot ${req.method} ${req.url}`);
})

server.listen(8080, () => {
    console.log('Server started at http://localhost:8080')
})