
const express = require ('express');

const app = express();

app.use(express.text());
app.use(express.json());

app.get('/profile', (req, res) => {
    res.send('Hello world!')
})


app.listen(3000);
console.log(`server on port ${3000}`);

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })


// app.get('/miarchivo', (req, res) => {
//     res.sendFile('./mifoto.jpg',{
//         root: __dirname
//     })
// })

// app.get('/user', (req, res) => {
//     res.json({"nombre":"esteban"})
// })


// app.get('/search', (req, res) => {
//     console.log(req.query)
//     if(req.query.q === 'javascript book'){
//         res.send('Lista de libros de js')

//     }else{
//         res.send('pagina normal');
//     }
//  })

// app.get('/add/:x/:y', (req, res) => {
//    const {x,y} = req.params;
//     res.send(`Result: ${parseInt(x) + parseInt(y)}`);
    
// })


// app.get('/user/:username/photo', (req, res) => {
//     if (req.params.username === 'esteban') {
//         return res.sendFile('./mifoto.jpg',{
//             root: __dirname
//         })
//     }

//     res.send('el usuario no tiene acceso')    
//  })

//  app.get('/name/:nombre/age/:age', (req, res) => {
//    res.send(` El usuario es ${req.params.nombre} y tiene ${req.params.age} años de edad`)
     
//  })








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