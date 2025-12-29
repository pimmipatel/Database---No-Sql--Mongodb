var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
const { title } = require('process')
app.set('view engine','ejs')
app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "default-src 'self' http://localhost:5000; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'");
    return next();
});
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.use(express.urlencoded({extended:false}))
app.use('/category',catRoutes)
app.listen(5000,()=>{
    console.log("5000 port running..");   
}) 