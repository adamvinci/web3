const router = require('express').Router()
const Person = require("../models/person")
const NotFoundError = require('../utils/NotFoundError')

router.get("/info", (request, response) => {
  const now = new Date()
  const bodyContentText = `
    Phonebook has info for ${allPersons.length} people.
    ${now.toString()}
    `
  response
    .type("text")
    .send(bodyContentText)
})

module.exports = router