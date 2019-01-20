const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000
app.set('port',port)

// Middleware for misc
app.use(express.static('./public'))

// Routes 
var indexRouter = require('./routes/index')


// Middleware for routes
app.use('/', indexRouter)



// Start listening on the specified port
// app.listen(port,()=>{
//     console.log(`Server listening on port ${port}!`)
// })
var server = app.listen(app.get('port'),function(){
    console.log(`Server listening on port ${port}`)
})

// Sockets

const io = require('socket.io').listen(server)

io.on('connection', (socket)=>{
    console.log('a user connected')
    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
    socket.on('chat message',(msg)=>{
        //console.log('message: ' + msg)
        io.emit('chat from server', msg)
    })
})