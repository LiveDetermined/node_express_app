const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello from your express server!')
})

app.listen(3000)