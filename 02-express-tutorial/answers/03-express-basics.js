const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

//Error: listen EADDRINUSE: address already in use :::5000
app.listen(5001, () => {
  console.log('server is listening on port 5001...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
