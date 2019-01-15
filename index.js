const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Routes
app.get('/',(req,res)=>{res.send('Hello world')})


// Start listening on the specified port
app.listen(port,()=>{
    console.log(`Server listening on port ${port}!`)
})