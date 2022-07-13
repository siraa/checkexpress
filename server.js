const express=require('express')
const available=require('./middleware/HourWork')
const path = require('path');
const app=express()

const port=5000


app.use(available);
app.use(express.static(path.join(__dirname,"/public")))

app.listen(port,(err)=>{
    err ? console.log(err):console.log('server running ')
})