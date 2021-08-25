const mongoose = require('mongoose')
const Category = require('../../models/category')
const categoryList = require('./category.json').category

mongoose.connect('mongodb://localhost/expense', {
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

categoryList.forEach((item) => {
  Category.create(item)
})
