require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');
const middlewares = require('./utils/middleware')
const personsRouter = require('./routes/persons')
const infoRouteur = require('./routes/info')
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url).then(result => { console.log('connected to MongoDB') }).catch((error) => { console.log('error connecting to MongoDB:', error.message) })
app.use(express.json())
app.use(cors());
app.use('/api/phone', personsRouter)
app.use('/info', infoRouteur)


app.use(middlewares.errorHandler);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})