// const http = require ('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html');
//     read.pipe(res);
// })

// server.listen(3000)
// console.log(`server on port ${3000}`);

const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('the current weather is nice')
})

app.use((req, res) => {
    res.status(404).send('not found your page')
})

app.listen(3000);
console.log(`server on port ${3000}`);