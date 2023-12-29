require('dotenv').config()
const express = require('express')
const app = express()
const port =4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// here we send request through the path and then it return a response in the form of string's to it.

app.get('/twitter', (req, res) => {
    res.send('webshocket.com')
});

app.get('/fb', (req, res) => {
    res.send('facebook.com')
});

app.get('/instagram', (req, res) => {
    res.send('instagram.com')
});

app.get('/linkledn', (req, res) => {
    res.send('linkledn.com')
});

app.get('/x', (req, res) => {
    res.send('Elon Musk')
});

app.get('/inevitable', (req, res) => {
    res.send('<h1>Inevitableinfotech.com</h1>')
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  });
  