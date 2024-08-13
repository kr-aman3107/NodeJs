const http = require('http');
const express = require('express');
const bodyPerser = require('body-parser');

const app = express();

app.use(bodyPerser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next) => {

    res.send('<form action="product" method="POST"><input type="text" name="title"><button type=""Submit>Add Product</button></form>');
    res.send('<form action="product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type=""Submit>Add Product</button></form>');
    next();
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next) => {
    console.log('In the second middleware!');
    res.send('<h1>Hello from Nodejs</h1>');
})
app.listen(3000);