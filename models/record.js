const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: { type: String, default: '' },
  category: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now() },
  amount: { type: Number, default: 0 },
})

module.exports = mongoose.model('Record', recordSchema)
