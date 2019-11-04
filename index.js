const express = require('express')
const app = express()

app.get('/', (req, res) =>  {
    res.sendFile(`${__dirname}/public/example.json`)
  })
app.get('/api', function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(3000, '0.0.0.0', ()=>{
    console.warn('Server express start at http://0.0.0.0:3000')
})