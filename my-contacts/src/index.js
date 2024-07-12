const express = require('express');
require('express-async-errors') // Precisa desse require para Error Handler funcionar em métodos assíncronos
const app = express();

const routes = require('./routes');

app.use(express.json())
app.use(routes)

// Error handler -> Middleware de 4 argumentos que se comportará como error handler
app.use((error, req, res, next) => {
    console.log('### Error Handler ###')
    console.log(error)
    res.sendStatus(500)
})

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080')
})
