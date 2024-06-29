const express = require('express');
const app = express();

const routes = require('./routes');

app.use((req, res, next) => {
    // Middleware 1
    console.log(1)
    next()
})

app.use((req, res, next) => {
    // Middleware 2
    console.log(2)
    next()
})

app.use(express.json())
app.use(routes)

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080')
})
