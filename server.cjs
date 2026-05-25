const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const { fileURLToPath } = require('node:url')

const port = Number(process.env.PORT) || 5173
const host = '0.0.0.0'
const distDir = path.join(process.cwd(), 'dist')
const indexFile = path.join(distDir, 'index.html')

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
])

function resolveFile(requestUrl) {
  const urlPath = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname)
  const candidatePath = path.join(distDir, urlPath)

  if (!candidatePath.startsWith(distDir)) {
    return null
  }

  try {
    const stat = fs.statSync(candidatePath)
    if (stat.isDirectory()) {
      return path.join(candidatePath, 'index.html')
    }
    return candidatePath
  } catch {
    return null
  }
}

const server = http.createServer((request, response) => {
  const requestUrl = request.url || '/'
  const filePath = resolveFile(requestUrl)
  const finalPath = filePath && fs.existsSync(filePath) ? filePath : indexFile

  fs.readFile(finalPath, (error, data) => {
    if (error) {
      response.statusCode = 404
      response.setHeader('Content-Type', 'text/plain; charset=utf-8')
      response.end('Not found')
      return
    }

    const extname = path.extname(finalPath).toLowerCase()
    response.setHeader('Content-Type', contentTypes.get(extname) || 'application/octet-stream')
    response.end(data)
  })
})

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`)
})
