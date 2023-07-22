const express = require('express');
const contactrouter = express.Router();
const path = require('path');
const root = require('../helper/path');

contactrouter.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(root,'views','contactus.html'))
})


module.exports = contactrouter;