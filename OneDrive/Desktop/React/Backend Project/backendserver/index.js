const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000



app.get('/' , (req , res)=>{
   res.send('hello from simple server')
})
app.get('/products' , (req , res)=>{
   res.send('hello from Products page')
})


app.listen(port , ()=> console.log(`Server is up and running on http://localhost:${port}`))