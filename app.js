const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3007

mongoose.connect('mongodb://localhost/Expense', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
