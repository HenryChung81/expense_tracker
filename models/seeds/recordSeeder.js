const Record = require('../record')
const db = require('../../config/mongoose')

const defaultRecord = {
  name: 'movie',
  category: 'entertainment',
  date: Date.now(),
  amount: 300,
}

db.once('open', () => {
  Record.create(defaultRecord)
  console.log('done!')
})
