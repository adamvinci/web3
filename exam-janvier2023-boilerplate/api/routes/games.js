const router = require('express').Router()
const Game = require('../models/games')
const NotFoundError = require('../utils/NotFoundError')
const Sales = require('../models/sales')
// Find all
router.get("/", (req, res, next) => {
    Game.find({})
        .then(games => res.json(games))
        .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Game.findById(req.params.id).then(game => {
        if (game) {
            res.json(game)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    Game.findByIdAndRemove(req.params.id).then(result => {
        if (result) {
            Sales.find({ game: result.id }).then((sales) =>
                sales.forEach((sale) => sale.delete()));
            res.json(result)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
});

// Insert one
router.post("/", (req, res, next) => {
    const body = req.body
    // Check body
    const errorMessages = []
    if (!body.name) errorMessages.push("name must be present")
    if (!body.price) errorMessages.push("price must be present")
    if (body.price && body.price < 0) errorMessages.push("price must be positive")
    if (body.stock && body.stock < 0) errorMessages.push("stock must be positive")
    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages })
        return
    }
    // Insert
    const game = new Game(body)
    game.save().then(result => {
        res.json(result)
    }).catch(err => next(err))
})


module.exports = router