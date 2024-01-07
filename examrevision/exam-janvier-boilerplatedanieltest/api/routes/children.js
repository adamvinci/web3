const router = require('express').Router()
const Children = require('../models/children')


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
        res.status(404).json("not found");
      }
    }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    Children.findByIdAndRemove(req.params.id).then(result => {
      if (result) {
        res.json(result)
      } else {
        res.status(404).json("not found");
      }
    })
      .catch(err => next(err))
  });

// Insert one
router.post("/", (req, res, next) => {
    const body = req.body
    // Check body
    const errorMessages = []
    if (!body.name || body.name.length<4) errorMessages.push("name must be present and must be longer than 3 letter")
    if (!body.birthDate) errorMessages.push("number must be present")
    if (!body.gender) errorMessages.push("genre must be present")
    if (errorMessages.length > 0) {
      res.status(422).json({ errorMessages })
      return
    }
    // Check existing
    Children.find({ name: body.name }).then(child => {
        // Insert
        const newChild = new Children(body)
        newChild.save().then(result => {
          res.json(result)
        })
        .catch(err => next(err))
      
    })
      .catch(err => next(err))
  })
  
  
  
module.exports = router