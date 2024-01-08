const mongoose = require('mongoose')



// Define Schema
const scoreSchema = new mongoose.Schema({
    username: String,
    date: String,
    score: Number,
    joke: mongoose.ObjectId
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})



// Export model
module.exports = mongoose.model('Score', scoreSchema)