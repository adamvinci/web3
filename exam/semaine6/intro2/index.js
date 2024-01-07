require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
const Note = require('./models/note')
app.get('/api/note', (request, response) => {
  Note.find({}).then(rsponse => {
    response.json(rsponse)
  })
})
app.get('/api/note/:id', (request, response) => {
  const { id } = request.params;
  Note.findById(id).then(rsponse => {
    response.json(rsponse)
  }).catch(error => response.json(error))
})
app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})