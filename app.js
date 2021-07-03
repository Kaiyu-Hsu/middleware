const express = require('express')
const app = express()
const port = 3000

// time use
app.use((req, res, next) => {
  const dateObject = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })

  console.log(dateObject, `|`, req.method, `from`, req.url )
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`)
})