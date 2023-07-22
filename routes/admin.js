const express = require('express');
const router = express.Router();
const path = require('path');
const root = require('../helper/path')

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(root,'views','add-product.html'))
})

router.post('/add-product', (req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.quantity);
    res.redirect('/shop')
})

module.exports = router;