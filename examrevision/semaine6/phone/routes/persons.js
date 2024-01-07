const Phone = require('../models/phone')
const router = require('express').Router()
const NotFoundError = require('../utils/NotFoundError')



router.get('/', (request, response) => {
    Phone.find({}).then(rsponse => response.json(rsponse)).catch(error => next(error))
})
router.get('/:id', (request, response, next) => {
    const { id } = request.params;
    Phone.findById(id).then(rsponse => {
        if (rsponse) {
            response.json(rsponse)
        } else {
            throw new NotFoundError()
        }

    }).catch(error => next(error))
})
router.post('/', (request, response) => {
    const body = request.body
    const errormessage = [];
    if (!body.name) errormessage.push("name must be present")
    if (!body.number) errormessage.push("number must be present")
    if (errormessage.length > 0) {
        return response.status(422).json({ errormessage })

    }

    const phone = new Phone({
        name: body.name,
        number: body.number,
    })
    console.log(phone)
    phone.save().then(savedNote => {
        response.json(savedNote)
    }).catch(error => next(error))
})
router.delete('/:id', (request, response, next) => {
    const { id } = request.params;
    Phone.findByIdAndDelete(request.params.id)
        .then(result => {
            if (result) {
                response.status(204).end()
            } else {
                response.sendStatus(404)
            }

        }).catch(error => next(error))

})
router.put('/:id', (request, response, next) => {
    const { id } = request.params;
    const body = request.body
    if (body.number === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }
    Phone.findByIdAndUpdate(request.params.id, body, { new: true })
        .then(result => {
            if (result) {
                response.json(result)
            } else {
                response.sendStatus(404)
            }

        }).catch(error => next(error))

})
module.exports = router