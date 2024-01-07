const { MONGODB_URI, PORT } = require('./utils/config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const middlewares = require('./utils/middlewares')
const gameRouteur = require('./routes/games')
const salesRouteur = require('./routes/sales')

// Connect to database
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Unable to connect to database", err))

// Create server
const app = express()

// Init server
app.use(cors())
app.use(express.json())
app.use(middlewares.logger)
app.use('/api/games', gameRouteur)
app.use('/api/sales', salesRouteur)
app.use(middlewares.errorHandler)


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})










const createData = () => {
  const Game = require('./models/games')
  const game1 = new Game({ name: "Pandemic", price: 25.5, stock: 5 })
  game1.save().then((result) => console.log(result))
  const game2 = new Game({ name: "Scythe", price: 53, stock: 2 })
  game2.save().then((result) => console.log(result))
  const game3 = new Game({ name: "Teera Mstica", price: 45.89, stock: 7 })
  game3.save().then((result) => console.log(result))
  const Sales = require('./models/sales')
  const sales1 = new Sales({ buyer: "Camille", date: "2021-01-02T10:17:35.457+00:00", quantity: 1, total: 25.5, game: "659a6ae00e01e2b61043f9ef" })
  sales1.save()
  const sales2 = new Sales({ buyer: "Laurent", date: "2022-01-02T13:26:15.457+00:00", quantity: 1, total: 25.5, game: "659a6b1febfa5c6b7ac589db" })
  sales2.save()
  const sales3 = new Sales({ buyer: "Laurent", date: "2023-01-02T15:49:27.457+00:00", quantity: 1, total: 25.5, game: "659a6b1febfa5c6b7ac589dc" })
  sales3.save()
}