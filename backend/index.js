require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/contact')

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


app.get('/api/contacts', (request, response) => {
  console.log(
  
  Contact
    .find({})
    .then(contacts => {
      response.json(contacts)
    })
})

app.get('/info', (request, response) => {
  Contact
    .find({})
    .then(contacts => {
      response.send(
        `<p>The phonebook contains ${contacts.length} persons</p>
        <p>${new Date().toString()}</p>
        `
      )
    })
})


app.get('/api/contacts/:id', (request, response, next) => {
  Contact
    .findById(request.params.id)
    .then(contact => {
      if (contact) {
        response.json(contact)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})



app.delete('/api/contacts/:id', (request, response, next) => {
  Contact
    .findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


app.put('/api/contacts/:id', (request, response, next) => {
  const { name, number } = request.body

  Contact
    .findByIdAndUpdate(
      request.params.id,
      { name, number },
      { new: true, runValidators: true, context: 'query' }
    )
    .then(updatedContact => {
      response.json(updatedContact)
    })
    .catch(error => next(error))
})


app.post('/api/contacts/', (request, response, next) => {
  const body = request.body

  const contact = new Contact({
    name: body.name,
    number: body.number
  })

  contact
    .save()
    .then(() => {
      response.json(contact)
    })
    .catch(error => next(error))
})


// middleware:
const unknownEndpoint = (request, response) => {
  response
    .status(404)
    .send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)
// ---


const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)