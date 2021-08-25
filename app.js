const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')
const app = express()
const PORT = 3007

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
