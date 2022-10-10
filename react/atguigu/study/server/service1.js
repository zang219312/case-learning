const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('有人能访问了服务器1')
  console.log('请求来自于', req.get('Host'))
  console.log('请求地址', req.url)
  next()
})

app.get('/students', (req, res) => {
  const students = [
    { id: '001', name: 'tom', age: 18 },
    { id: '002', name: 'jerry', age: 19 },
    { id: '003', name: 'tony', age: 20 }
  ]
  res.send(students)
})

app.listen(5000, 'localhost', err => {
  if (!err) {
    console.log('服务器1启动成功,请求地址localhost:5000/students')
  } else console.log(err)
})
