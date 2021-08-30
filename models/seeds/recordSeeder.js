const Record = require('../record')
const db = require('../../config/mongoose')

const defaultRecord = {
  name: 'movie',
  category: 'entertainment',
  date: Date.now(),
  amount: 300,
  brand: '美麗華',
}

db.once('open', async () => {
  try {
    await Record.create(defaultRecord)
    console.log('record seed build complete!')
  } catch (error) {
    throw error
  } finally {
    process.exit()
  }
})
