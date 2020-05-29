const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.post('/login', (req, res) => {
     const { username, password } = req.body
     if(username === 'Admin' && password === 'Admin') {
         return res.json({ status: 'ok', message: 'adminToken123'})
     }
     return res.json({ status: 'error', message: 'Incorrect username or password'})
})

app.listen(3000)