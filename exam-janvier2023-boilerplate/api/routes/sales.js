const router = require('express').Router()

const Game = require('../models/games')
const Sales = require('../models/sales')
const NotFoundError = require('../utils/NotFoundError')
// Find all
router.get("/", (req, res, next) => {
    Sales.find({})
        .then(sales => res.json(sales))
        .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Sales.findById(req.params.id).then(sale => {
        if (sale) {
            res.json(sale)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    Sales.findByIdAndRemove(req.params.id).then(result => {
        if (result) {
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
    if (!body.buyer) errorMessages.push("buyer must be present")
    if (!body.quantity) errorMessages.push("quantity must be present")
    if (!body.date) errorMessages.push("date must be present")
    if (!body.game) errorMessages.push("game must be present")
    if (body.quantity && body.quantity <= 0) errorMessages.push("quantity must be >0")
    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages })
        return
    }
    Game.findById(body.game).then((game) => {
        if (!game) {
            errorMessages.push("this game does not exist")
            res.status(404).json({ errorMessages })
        } else {
            if (game.stock < body.quantity || game.stock == null) {
                errorMessages.push("this game does not have enough stock")
                res.status(400).json({ errorMessages })
            } else {
                game.stock -= body.quantity;
                game.save().catch(err => next(err))
                body.total = (game.price * body.quantity)
                const sales = new Sales(body)
                console.log(sales)
                sales.save().then(result => {
                    res.json(result)
                }).catch(err => next(err))
            }


        }
    })
})

module.exports = router