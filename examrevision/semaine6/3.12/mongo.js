const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://adamb:${password}@cluster0.sv28lyv.mongodb.net/phonebook?retryWrites=true&w=majority`

console.log(url)
mongoose.set('strictQuery', false)
mongoose.connect(url)

const phoneSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const PhoneBook = mongoose.model('PhoneBook', phoneSchema)
if (process.argv.length > 3) {
    const phone = new PhoneBook({
        name: process.argv[3],
        number: process.argv[4],
    })

    phone.save().then(result => {
        console.log(`added ${result.name} ${result.number} to phonebook`)
        mongoose.connection.close()
    })
} else {
    PhoneBook.find({}).then(result => {
        console.log("phonebook : ")
        result.forEach((r) => console.log(r.name + " " + r.number))
        mongoose.connection.close()
    })
}

