
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactrouter = require('./routes/contactus');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use(contactrouter)
app.post('/success',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','success.html'))
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000)

