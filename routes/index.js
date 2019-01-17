const express = require('express')
const router = express.Router()
var path = require('path')

// middleware that is specific to this router
router.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now())
    next()
})
// routes go here

module.exports = router