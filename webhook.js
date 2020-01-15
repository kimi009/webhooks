const http = require('http')
const crypto = require('crypto')
const SECRET = 'Vanvy@11'
function sign(body) {
  return crypto
    .createHmac('sha1', SECRET)
    .update(body)
    .digest('hex')
}

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers, req.rawHeaders, req.rawTrailers)
  // if (req.url === '/webhook') {
  //   let buffers = []
  //   req.on('data', buffer => {
  //     buffers.push(buffer)
  //   })
  //   req.on('end', buffer => {
  //     let body = Buffer.concat(buffers)
  //     let event = req.headers['x-gitea-event']
  //     let sign = req.headers['HTTP_X_GITEA_SIGNATURE']
  //     console.log(sign, event, req.headers)
  //   })
  //   res.setHeader('Content-Type', 'application/json')
  //   res.end(JSON.stringify({ ok: true }))
  // } else {
  //   res.end(JSON.stringify({ ok: true }))
  // }
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ ok: true }))
})

server.listen(6020, () => {
  console.log('WebHook服务已经启动')
})
