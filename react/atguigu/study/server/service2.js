const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('有人能访问了服务器2')
  next()
})

app.get('/cars', (req, res) => {
  const cars = [
    { id: '001', name: '奔驰', price: 109 },
    { id: '002', name: '马自达', age: 39 },
    { id: '003', name: '大众', age: 120 }
  ]
  res.send(cars)
})

app.listen(5001, 'localhost', err => {
  if (!err) {
    console.log('服务器2启动成功,请求地址localhost:5001/cars')
  } else console.log(err)
})
