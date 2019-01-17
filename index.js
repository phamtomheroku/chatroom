const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000
// Middleware for misc
app.use(express.static('./public'))

// Routes 
var indexRouter = require('./routes/index')


// Middleware for routes
app.use('/', indexRouter)



// Start listening on the specified port
app.listen(port,()=>{
    console.log(`Server listening on port ${port}!`)
})