const router = require('express').Router()
const Event = require('../models/event')
const NotFoundError = require('../utils/NotFoundError')
const Children = require('../models/children')

// Find all
router.get("/", (req, res, next) => {
    Event.find({})
        .then(event => res.json(event))
        .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Event.findById(req.params.id).then(event => {
        if (event) {
            res.json(event)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    console.log(req.params.id)
    Event.findByIdAndRemove(req.params.id).then(result => {
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
    if (!body.name) errorMessages.push("name must be present")
    if (!body.date) errorMessages.push("date must be present")
    if (!body.child) errorMessages.push("child id must be present")
    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages })
        return
    }

    Children.findById(body.child).then((result) => {
        if (result) {
            const event = new Event(body)
            event.save().then(result => {
                res.json(result)
            }).catch(err => next(err))
        } else {
            errorMessages.push("this child does not exist")
            res.status(404).json({ errorMessages })
            return
        }
    }).catch(err => next(err))


})
module.exports = router