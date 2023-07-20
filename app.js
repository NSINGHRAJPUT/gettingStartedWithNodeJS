
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded())

app.use('/add-product',(req,res,next)=>{
    console.log('in the middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="quantity"><button type="submit">submit</button></form>')
})

app.use('/product', (req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.quantity);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log('in another middleware')
    res.send('<h1>Hello from Express</h1>')
})

