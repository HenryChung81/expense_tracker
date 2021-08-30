const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const category = require('../../models/seeds/category.json').category
const dayjs = require('dayjs')

router.get('/new', (req, res) => {
  const config = {
    title: '新增支出',
    action: '/record/new',
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

router.get('/:_id/edit', async (req, res) => {
  const record_id = req.params._id

  const config = {
    title: '修改支出',
    action: `/record/${record_id}?_method=PUT`,
  }

  try {
    let record = await Record.findOne({ _id: record_id }).lean()
    record.date = dayjs(record.date).format('YYYY-MM-DD')

    res.render('edit', { config, category, record })
  } catch (error) {
    throw error
  }
})

router.put('/:_id', async (req, res) => {
  const record_id = req.params._id
  const { name, date, category, amount, brand } = req.body
  const postData = { name, date, category, amount, brand }

  try {
    let record = await Record.findOne({ _id: record_id })
    if (postData.name) record.name = postData.name
    if (postData.date) record.date = dayjs(postData.date).format('YYYY-MM-DD')
    if (postData.category) record.category = postData.category
    if (postData.amount) record.amount = postData.amount
    if (postData.brand) record.brand = postData.brand
    await record.save()
    res.redirect('/')
  } catch (error) {
    throw error
  }
})

module.exports = router
