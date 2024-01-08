const router = require('express').Router()
const NotFoundError = require('../utils/NotFoundError')

const Joke = require('../models/jokes')
// Find all
router.get("/", (req, res, next) => {
    Joke.find({})
        .then(jokes => res.json(jokes))
        .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Joke.findById(req.params.id).then(joke => {
        if (joke) {
            res.json(joke)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    Joke.findByIdAndRemove(req.params.id).then(result => {
        if (result) {
            res.json(result)
        } else {
            throw new NotFoundError()
        }
    })
        .catch(err => next(err))
});

// Insert one
router.post("/", (req, res, next) => {
    const body = req.body
    // Check body
    const errorMessages = []
    if (!body.question) errorMessages.push("question must be present")
    if (!body.answer) errorMessages.push("answer must be present")
    if (!body.category) errorMessages.push("category must be present")
    if (body.category && body.category.length < 3) errorMessages.push("category.length must be > 3")
    if (body.answer && body.answer.length < 3) errorMessages.push("answer.length must be > 3")
    if (body.question && body.question.length < 3) errorMessages.push("question.length must be > 3")
    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages })
        return
    }

    const joke = new Joke(body)
    joke.save().then(result => {
        res.json(result)
    }).catch(err => next(err))


})


module.exports = router