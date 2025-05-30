const express = require('express')
const morgan = require('morgan') // third-party middleware
const app = express()
const userModel = require('./models/user')
const dbConn = require('./config/db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public")) // serving static files

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

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const {username, email, password} = req.body
    const newUser = await userModel.create ({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser)
})

app.get('/get-users', (req, res) => {
    userModel.find(
        { username: 'bhawuk_arora' }
    ).then((users) => {
        res.send(users)
    })
})

// app.post('/get-form-data', (req, res) => {
//     console.log(req.body)
//     res.end("Data recieved!")
// })


app.listen(3001)