const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  title: { type: String, default: '' },
  name: { type: String, default: '' },
  className: { type: String, default: '' },
})

module.exports = mongoose.model('Category', categorySchema)
