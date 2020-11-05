const express = require('express')
const postRouter = require('../router/postRouter')
const server = express()

server.use(express.json())
server.use('/api/posts',postRouter)

server.get('/',(req,res)=>{
    res.send('<h1>Learned Router Side Routing</h1>');
});

module.exports = server