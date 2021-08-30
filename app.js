const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const hbsHelpers = require('./util/handlebarsHelpers')

const routes = require('./routes')
require('./config/mongoose')
const app = express()
const PORT = 3007

app.engine(
  'hbs',
  exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: hbsHelpers })
)
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
