const port = 3001

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const AllowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(AllowCors)


server.listen(port, () => console.log(`Backend running ${port}.`))


module.exports = server