const NotFoundError = require("./NotFoundError")

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error instanceof NotFoundError) {
        response.status(404).end()
    }

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

// this has to be the last loaded middleware.
exports.errorHandler = errorHandler