
const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})


app.get('/miarchivo', (req, res) => {
    res.sendFile('./mifoto.jpg',{
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({"nombre":"esteban"})
})


app.listen(3000);
console.log(`server on port ${3000}`);






// const http = require ('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html');
//     read.pipe(res);
// })

// server.listen(3000)
// console.log(`server on port ${3000}`);


// RUTAS
// app.get('/products', (req, res) => {
    // validar datos
    // query o database
    // process data


    // res.send('Lista de productos')
// })

// app.post('/products', (req, res) => {
//     res.send('Creando Productos')
// })

// app.put('/products', (req, res) => {
//     res.send('Actualizando Productos')
// })

// app.delete('/products', (req, res) => {
//     res.send('Eliminando Productos')
// })

// app.patch('/products', (req, res) => {
//     res.send('Actualizando una parte del Producto')
// })

// app.get('/about', (req, res) => {
//     res.send('About')
// })

// app.get('/weather', (req, res) => {
//     res.send('the current weather is nice')
// })

// app.use((req, res) => {
//     res.status(404).send('not found your page')
// })