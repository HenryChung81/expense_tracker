const Category = require('../../models/category')
const categoryList = require('./category.json').category
const db = require('../../config/mongoose')

db.once('open', () => {
  categoryList.forEach((item) => {
    Category.create(item)
  })
  console.log('done!')
})
