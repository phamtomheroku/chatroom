const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now())
    next()
})

// Define the home page route
router.get('/',function(req,res){
    res.send('This is the home page')
})

// Fefine the about route
router.get('/about',function(req,res){
    res.send('About Page')
})

module.exports = router