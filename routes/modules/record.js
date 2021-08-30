const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const category = require('../../models/seeds/category.json').category

router.get('/new', (req, res) => {
  const config = {
    title: '新增支出',
    action: 'new',
  }
  res.render('new', { config, category })
})

router.post('/new', async (req, res) => {
  const { name, date, category, amount, brand } = req.body
  const postData = { name, date, category, amount, brand }

  try {
    let newRecord = new Record(postData)
    await newRecord.save()
    res.redirect('/')
  } catch (error) {
    throw error
  }
})

module.exports = router
