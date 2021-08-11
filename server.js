require('./models/db')
const express=require('express')
const rest=require('./controller/restController')

const app=express()
app.use(express.json())


app.use('/rest',rest)

app.listen(3000)