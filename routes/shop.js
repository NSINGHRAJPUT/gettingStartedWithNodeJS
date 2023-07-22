const express = require('express');
const shopRoutes = express.Router();
const path = require('path');
const root = require('../helper/path')

shopRoutes.get('/',(req,res,next)=>{
    res.sendFile(path.join(root,'views', 'shop.html'))
})

module.exports = shopRoutes;