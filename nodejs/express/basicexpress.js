// import http from 'node:http';

// const server  = http.createServer((req, res) => {

//     if(req.method === 'GET'){

//     }

//     if(req.method === 'POST'){

//     }

//     res.write("Hello from node server");
//     res.end();
// })

// server.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })

// // CRUD
// // Create -> POST
// // Read -> GET
// // Update -> PUT, PATCH
// // Delete-> DELETE

import express from "express";

const app = express();


app.get('/', (re, res) => {
    res.send('Hello from express')

})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
