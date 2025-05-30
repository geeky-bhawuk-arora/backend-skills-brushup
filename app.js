const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.end("Home Page!")
})

app.get('/about', (req, res) => {
    res.end("About Page!")
})


app.listen(3001)