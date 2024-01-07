const router = require('express').Router()
const Children = require('../models/children')
const NotFoundError = require('../utils/NotFoundError')
const Event = require('../models/event')

// Find all
router.get("/", (req, res, next) => {
    Children.find({})
        .then(child => res.json(child))
        .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Children.findById(req.params.id).then(child => {
        if (child) {
            res.json(child)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    Children.findByIdAndRemove(req.params.id).then(result => {
        if (result) {
            res.json(result)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
    Event.find({ child: req.params.id }).then((result) =>
        result.forEach((r) => r.delete())
    )
});

// Insert one
router.post("/", (req, res, next) => {
    const body = req.body
    // Check body
    const errorMessages = []
    if (!body.name) errorMessages.push("name must be present")
    if (!body.birthDate) errorMessages.push("birthDate must be present")
    if (!body.gender) errorMessages.push("gender must be present")
    if (body.gender !== "M" && body.gender !== "F") errorMessages.push("gender must be M or F")
    if (body.name.length < 3) errorMessages.push("name must be at least 3 char long")
    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages })
        return
    }

    // Insert
    const children = new Children(body)
    children.save().then(result => {
        res.json(result)
    }).catch(err => next(err))

})

module.exports = router