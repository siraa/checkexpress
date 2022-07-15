const express=require('express')
const available=require('./middleware/HourWork')
const path = require('path');
const app=express()

const port=5000
// app.use(express.static('public'));

app.use(available);
app.use(express.static(path.join(__dirname,"/public")))
// console.log(app.use(express.static(path.join(__dirname+"public"))))
app.use(express.static('public'));

// app.use(express.static(path.join(__dirname+"/public/homepage.html"))
// app.use(express.static(path.join(__dirname,"/public/homepage.html")))

app.listen(port,(err)=>{
    err ? console.log(err):console.log('server running ',port)
})