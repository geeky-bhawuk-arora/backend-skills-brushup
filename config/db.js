const mongoose = require('mongoose')

const dbconn = mongoose.connect('mongodb://0.0.0.0/test-db')
        .then(() => {
            console.log("Database connection success!")
        })

module.exports = dbconn