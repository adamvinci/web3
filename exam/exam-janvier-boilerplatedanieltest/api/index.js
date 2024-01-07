const {MONGODB_URI, PORT} = require('./utils/config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const middlewares = require('./utils/middlewares')

const childrenRouter = require('./routes/children')
const eventRouter = require('./routes/events');


// Connect to database
mongoose.connect(
  MONGODB_URI
)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Unable to connect to database", err))

// Create server
const app = express()

// Init server
app.use(cors())
app.use(express.json())
app.use(middlewares.logger)

app.use('/api/children',childrenRouter)
app.use('/api/events',eventRouter)

app.use(middlewares.errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})