const mongoose = require('mongoose')



// Define Schema
const salesSchema = new mongoose.Schema({
    buyer: String,
    date: String,
    quantity: Number,
    total: Number,
    game: mongoose.ObjectId
})

salesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})



// Export model
module.exports = mongoose.model('Sales', salesSchema)