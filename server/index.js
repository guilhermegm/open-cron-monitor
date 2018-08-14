const axios = require('axios')
const express = require('express')
const app = express()

app.get('/api/reports', async (req, res) => {
  const response = await axios.get('http://142.93.114.32:3000/reports')
  res.json(response.data)
})

app.listen(2700, () => {
  console.log('Example app listening on port 3000!')
})
