const http = require('http');
const url = require('url');

const routes = require('./routes');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)

    console.log(`Request method: ${req.method} | Endpoint: ${parsedUrl.pathname}`)

    const route = routes.find(route => route.method === req.method && route.endpoint === parsedUrl.pathname)

    if (route) {
        req.query = parsedUrl.query
        route.handler(req, res)
        return;
    }
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.end(`Cannot ${req.method} ${parsedUrl.pathname}`);
})

server.listen(8080, () => {
    console.log('Server started at http://localhost:8080')
})