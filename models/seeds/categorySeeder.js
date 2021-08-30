const Category = require('../../models/category')
const categoryList = require('./category.json').category
const db = require('../../config/mongoose')

db.once('open', async () => {
  try {
    await Promise.all(
      categoryList.map(async (item) => {
        return await Category.create(item)
      })
    )
    console.log('category seed build complete!')
  } catch (error) {
    throw error
  } finally {
    process.exit()
  }
})
