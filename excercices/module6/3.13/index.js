const express = require("express")
const middlewares = require('./utils/middlewares')
const { MONGODB_URI, PORT } = require('./utils/config')
const mongoose = require('mongoose')
const personsRouter = require('./routes/persons')
const infoRouter = require('./routes/info')


mongoose.connect(MONGODB_URI)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const app = express()

app.use(express.json())
app.use(middlewares.logger)
app.use(middlewares.attachCurrentuser)

app.use('/api/persons', personsRouter)
app.use(infoRouter)

app.use(middlewares.errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})






