
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram',(req,res) => {
res.send('Welcomr to Insta');
})
app.get('/Login',(req,res) =>{
res.send('<h1>Please Login at BhaveshTech</h1>')
})
app.get('/Linkedin',(req,res) =>{
    res.send('<h3><b><i>Welcome to Bhavesh Tech Youtube Channel</i></b></h3>')
})
app.listen(process.env.PORT ,() => {
  console.log(`Example app listening on port ${port}`)
})