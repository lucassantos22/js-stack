const http = require('http');
const users = require('./mocks/users');

const server = http.createServer((req, res) => {
    console.log(`Request method: ${req.method} | Endpoint: ${req.url}`)
    if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users));
        return
    }
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(`Cannot ${req.method} ${req.url}`);
})

server.listen(8080, () => {
    console.log('Server started at http://localhost:8080')
})