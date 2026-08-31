const express = require('express')
const server = express()

server.get('/healthcheck', (req, res) => {
    const data = {
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now()
    }
    res.json(data)
    res.send(200)
})

server.listen(3000, () => {
    console.log('server running on port 3000');
})