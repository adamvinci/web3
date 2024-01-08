const router = require('express').Router()
const NotFoundError = require('../utils/NotFoundError')

const Score = require('../models/scores')
const Joke = require('../models/jokes')

// Find all
router.get("/", (req, res, next) => {
    Score.find({})
        .then(scores => res.json(scores))
        .catch(err => next(err))
})
// Delete one
router.delete("/:id", (req, res, next) => {
    Score.findByIdAndRemove(req.params.id).then(result => {
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
    if (!body.username) errorMessages.push("username must be present")
    if (!body.date) errorMessages.push("date must be present")
    if (!body.score) errorMessages.push("score must be present")
    if (!body.joke) errorMessages.push("joke must be present")
    if (body.username && body.username.length < 3) errorMessages.push("username.length must be > 3")

    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages })
        return
    }
    Joke.findById(body.joke).then(joke => {
        if (joke) {
            Score.find({ username: body.username, joke: body.joke }).then((score) => {
                if (score.length > 0) {
                    errorMessages.push("this user already gave a vote to this joke")
                    res.status(409).json({ errorMessages })
                } else {
                    const score = new Score(body)
                    score.save().then(result => {
                        res.json(result)
                    }).catch(err => next(err))
                }
            })
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))

})

module.exports = router