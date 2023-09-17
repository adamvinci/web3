require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)


const personScheme = new mongoose.Schema({
    content: String,
    number: String
})

personScheme.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personScheme)


