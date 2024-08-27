import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end('{"ok":true}')
})

server.listen(8080, '0.0.0.0', () => {
  console.log('Listening on 0.0.0.0:8080')
})
