const router = require('express').Router()
const Person = require("../models/person")
const NotFoundError = require('../utils/NotFoundError')


router.get("", (request, response) => {
    Person.find({}).then(data => {
        response.json(data)
    })

})

router.get("/:id", (request, response, next) => {

    Person.findById(request.params.id).then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(404).end
        }

    }).catch(error => next(error))
})

router.delete(":id", (request, response) => {
    Person.findByIdAndRemove(request.params.id).then(result => {
        response.status(204).end()
    })
        .catch(error => next(error))
})

router.post("", (request, response) => {
    const body = request.body
    console.log(body)
    if (body.name === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }

    const note = new Person({
        content: body.name,
        number: body.number,
    })

    note.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

module.exports = router