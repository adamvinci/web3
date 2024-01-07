const Phone = require('../models/phone')
const router = require('express').Router()

router.get("/", (request, response, next) => {
    Phone.countDocuments()
        .then(count => {
            response.type("text").send(`Phonebook has info for ${count} people.\n${new Date().toString()}`)
        })
        .catch(err => next(err))

})

module.exports = router