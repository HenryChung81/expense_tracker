const mongoose = require('mongoose')
const Record = require('../record')
mongoose.connect('mongodb://localhost/expense', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const defaultRecord = {
  name: 'movie',
  category: 'entertainment',
  date: Date.now(),
  amount: 300,
}

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

Record.create(defaultRecord)
