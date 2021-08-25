const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const routes = require('./routes')
const app = express()
const PORT = 3007

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

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
