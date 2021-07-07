const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
  // const dateReq = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  const dateReqObject = new Date()
  const reqData = new Date().toLocaleString()
  const reqMs = dateReqObject.getMilliseconds()
  const reqTime = `${reqData}:${reqMs}`

  console.log(`${reqData} | ${req.method} from ${req.url}`)

  res.on('finish', () => {
    const dateResObject = new Date()
    const resData = new Date().toLocaleString()
    const resMs = dateResObject.getMilliseconds()
    const resTime = `${resData}:${resMs}`
    const totalTime = resMs - reqMs
    
    console.log(`${resData} | ${req.method} from ${req.url} | total time: ${totalTime}ms`)
  })
  
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