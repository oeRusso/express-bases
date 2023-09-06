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
    res.end('Hello world!')
})

app.listen(3000);
console.log(`server on port ${3000}`);