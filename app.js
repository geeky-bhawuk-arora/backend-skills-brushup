const express = require('express')
const morgan = require('morgan') // third-party middleware
const app = express()

// rendering templates
app.set('view engine', 'ejs')

// middleware (built-in, custom, third-party)
// app.use((req, res, next) => {
//     console.log("This is middleware.")
//     const a = 2
//     const b = 3
//     console.log(a + b)
//     return next()
// })

// third-party middleware
app.use(morgan('dev'))

app.get('/', 
    // middleware for /
    (req, res, next) => {
        console.log("middleware -> index page")
        next()
    },
    // render template 
    (req, res) => {
        console.log("render index page")
        res.render('index')
    }
)

app.get('/about', (req, res) => {
    res.end("About Page!")
})


app.listen(3001)