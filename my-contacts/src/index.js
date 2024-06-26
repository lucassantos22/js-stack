const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080')
})