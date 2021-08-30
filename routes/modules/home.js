const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const dayjs = require('dayjs')

router.get('/', async (req, res) => {
  const { category } = req.query
  console.log('!!!!@@@@@queryCategory', category)

  try {
    let records = await Record.aggregate([
      {
        $match: { category: category || String },
      },
    ])
    let categories = await Category.find().lean()

    records.forEach((record) => {
      record.iconName = categories.find(
        (item) => item.name === record.category
      ).className

      record.date = dayjs(record.date).format('YYYY-MM-DD')
    })

    res.render('index', { records, categories, category })
  } catch (error) {
    throw error
  }
})

module.exports = router
