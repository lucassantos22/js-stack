const http = require('http');
const url = require('url');

const bodyParser = require('./helpers/bodyParser');
const routes = require('./routes');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    let { pathname } = parsedUrl

    console.log(`Request method: ${req.method} | Endpoint: ${pathname}`)

    const splitEndpoint = pathname.split('/').filter(routeItem => Boolean(routeItem))
    let id = null;

    if (splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`
        id = splitEndpoint[1]
    }

    const route = routes.find(route => route.method === req.method && route.endpoint === pathname)

    if (route) {
        req.query = parsedUrl.query
        req.params = { id }
        res.send = (statusCode, body) => {
            res.writeHead(statusCode, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(body));
        }
        if (['POST', 'PUT', 'PATCH'].includes(route.method)) {
            bodyParser(req, () => route.handler(req, res))
            return
        }
        route.handler(req, res)
        return;
    }
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.end(`Cannot ${req.method} ${pathname}`);
})

server.listen(8080, () => {
    console.log('Server started at http://localhost:8080')
})