require('dotenv').config()

const express = require('express');
const morgan = require('morgan')
const path = require('path')

const main_R = require('./routes/main_R')
const app = express();

const port = process.env.PORT||3002

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use('/js', express.static(path.resolve(__dirname,"./public/js"))) 

app.use('/', main_R)


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})