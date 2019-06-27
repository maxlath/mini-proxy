const request = require('request')

module.exports = (req, res) => {
  const url = req.originalUrl.replace(/^\//, '')
  const { method, headers } = req

  // Host is likely to be set to the proxy host
  delete headers.host

  request({ method, url, headers })
  .on('error', handleErrors(req, res))
  .pipe(res)
}

const handleErrors = (req, res) => err => {
  console.error('err', err)
  var { status, statusCode } = err
  status = status || statusCode
  res.status(status).send(err)
}
