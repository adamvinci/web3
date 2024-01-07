const morgan = require('morgan')
const NotFoundError = require('./NotFoundError')




// Logger
morgan.token('body', (req) => {
  return JSON.stringify(req.body)
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body')

// Error handler
const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }
  if (error instanceof NotFoundError) {
    return res.status(404).end()
  }

  next(error)
}



exports.logger = logger
exports.errorHandler = errorHandler