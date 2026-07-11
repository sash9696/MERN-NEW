//  const getUserSync = (userId) => {
//     const users = {
//         1:{name:'John', age:35},
//         2:{name:'Pete', age:25}
//     };

//     return users[userId]
//  }

//  const user = getUserSync(1);

//  console.log(user)

// const getUserAsync = (userId, callback) => {
//   const users = {
//     1: { name: "John", age: 35 },
//     2: { name: "Pete", age: 25 },
//   };

//   setTimeout(() => {
//     callback(users[userId])
//   }, 1000)
// };

// getUserAsync(1, (user) => {
//     console.log(user)
// })

// process and environment

// console.log(process)

// console.log(process.argv)
// an array that contains the command line arguments

// console.log(process.pid)
// id of the current process

// console.log(process.env)

// console.log(process.exit)

// Environment
// (process.env)

// Module
// its a self contained piece of code

//  3 types of modules -> internal, user-created, third party

// // internal module
// const http = require('http');

// http.createServer(function(req, res){

//     res.writeHead(200, {'Content-Type':  'text/plain'});
//     res.end('Hello World')
// }).listen(8080)

// user created modules

// const add = require('./math')

// console.log(add(20,30));

// third party modules
// u can install using npm and use using require or import third party libraries

// Internal modules

// common and imp ones
//fs : used for file system operations
// http: used for creating http servers and client
//path: used for working with file paths
// os: used for retrieving operating system related info
// crypto: used for cryptographic operations

// const fs = require('fs');

// fs.readFile('file.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// after node js 13
// import fs from 'node:fs'
// import fs from 'fs'

//Async in node js

// const fs = require('fs');

// callbacks
// fs.readFile('file.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// Promises

// const fs = require("fs/promises")

// fs.readFile('file.txt')
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.error(err)
//     })

// Async await

const fs = require("fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("file.txt");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readFile()