const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://adambmongodb:${password}@cluster0.4fucmwa.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personScheme = new mongoose.Schema({
    content: String,
    number: String
})

const Personne = mongoose.model('Person', personScheme)

if (process.argv.length === 3) { //node mongo.js password
    Personne
        .find({})
        .then(persons => {
            console.log(persons)
            mongoose.connection.close()
        })
}

if (process.argv.length === 5) {//node mongo.js password name number
    const person = new Personne({
        name: process.argv[3],
        number: process.argv[4]
    })
    person.save().then(result => {
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
    })

}

