const express = require('express')
const app = express()
const PORT = 3007

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
