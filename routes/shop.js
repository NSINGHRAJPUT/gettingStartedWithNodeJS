const express = require('express');
const shopRoutes = express.Router();

shopRoutes.use('/',(req,res,next)=>{
    console.log('in another middleware')
    res.send('<h1>Hello from Express</h1>')
})

module.exports = shopRoutes;