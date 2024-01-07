const mongoose = require('mongoose')



// Define Schema
const childSchema = new mongoose.Schema({
    name: String,
    birthDate: String,
    gender: {
        type: String,
        enum: ['M', 'F'],
    },
})

childSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})



// Export model
module.exports = mongoose.model('Person', childSchema)