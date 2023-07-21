const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log('in the middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="quantity"><button type="submit">submit</button></form>')
})

router.post('/product', (req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.quantity);
    res.redirect('/')
})

module.exports = router;