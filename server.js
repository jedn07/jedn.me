const express = require('express')
const server = express()
server.use(express.static('client'))

server.listen(3000, () => {
    console.log('server running on port 3000');
})