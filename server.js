const { port } = require('config')
const request = require('request')
const { blue } = require('chalk')
const morgan = require('morgan')

const app = require('express')()

app.use(morgan({ format: 'dev' }))

app.listen(port, (err, res) => {
  if (err) console.error(err)
  else console.log(blue(`started listening on port ${port}`))
})

app.all('*', require('./proxy'))
