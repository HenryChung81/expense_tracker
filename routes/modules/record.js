const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/new', async (req, res) => {
  const { name, date, category, amount, brand } = req.body
  const postData = { name, date, category, amount, brand }

  try {
    let newRecord = new Record(postData)
    await newRecord.save()
    res.redirect('/')
  } catch (error) {
    console.error(error)
  }
  return newRecord
})

module.exports = router
