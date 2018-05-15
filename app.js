const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())


const { userApi } = require('./routes/index')
app.use('/api', userApi )

app.get('/', function(req, res){
    res.send('hello world')
})

app.listen(8080, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Hola Mundo')
    }
})
