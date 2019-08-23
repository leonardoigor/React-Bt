const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports =
    mongoose.connect('mongodb://localhost/todoApp')
        .then(() => console.log('connectado ao mongoose')).catch(e => console.log(e))