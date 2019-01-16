const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Routes
var indexRouter = require('./routes/index')


// Middleware for routes
app.use('/', indexRouter)


// Start listening on the specified port
app.listen(port,()=>{
    console.log(`Server listening on port ${port}!`)
})