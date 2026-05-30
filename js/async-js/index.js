// console.log("Start")

// while(true){

// }
// // infinite loop blovks thread forever

// console.log("End")

// Async js
// Callbacks

// console.log("Start")

// setTimeout(function(){
//     console.log('Timer done')
// }, 2000)

// console.log("End")

// console.log("Start")

// setTimeout(function(){
//     console.log('Timer done')
// }, 0)

// function blockForOneSec(){
//     const start  = Date.now();

//     while(Date.now() - start < 1000){};

//     console.log('block')
// }
// blockForOneSec();

// console.log("End")

// problems with callbacks

// setTimeout(function(){
//     console.log('Timer done')
//     setTimeout(function(){
//         console.log('Timer2 done')
//         setTimeout(function(){
//             console.log('Timer3 done')
//         }, 3000)
//     }, 2000)
// }, 1000)

// callback hell

// inversion of control

// normal func

// function greet(){
//     console.log('hi')
// }

// greet(); //function in our control

// but with async callbacks

// apiCall(function onSucess(data){
//     console.log(data)
// })

// now apiCall will control
// when callback runs
// how many times it runs
// and wht arguments goes in

// example

// paymentGateway.card(card, function(){
//     sendReciept();
// })

// promises

// console.log('Start');

// fetch("https://api.facebook.com")
//     .then((data) => console.log('User data: ', data))

// console.log('End')

// console.log('1');

// setTimeout(() => {
//     console.log('2');

// }, 0)

// Promise.resolve()
//     .then(() => console.log(3))

// console.log('4')

// console.log('1');

// setTimeout(() => {
//     console.log('2');

// }, 0)

// Promise.resolve()
//     .then(() => console.log('3'))

// queueMicrotask(() => {
//     console.log('4')
// })

// console.log('5')

// console.log("1");

// setTimeout(() => {
//   console.log("2");

//   Promise.resolve().then(() => console.log("3"));
// }, 0);

// setTimeout(() => {
//   console.log("4");
// }, 0);

// Get User
// Get Cart
//Create Order

// Callbacks

// function getUser(callback){

//     setTimeout(() => {
//         callback({
//             id:1,
//             name:'John'
//         })
//     }, 1000);
// }

// function getCart(userId, callback){
//     setTimeout(() => {
//         callback([
//             {id:101, name:'Iphone'},
//             {id:102, name:'Airpods'},
//         ])
//     }, 2000);
// }

// function createOrder(cart, callback){
//     setTimeout(() => {
//         callback({
//             orderId:'ORD123',
//             items:cart
//         })
//     }, 1500);
// }

// checkout flow

// getUser(function(user){
//     console.log('User:', user);

//     getCart(user.id, function(cart){
//         console.log('Cart:', cart);

//         createOrder(cart, function(order){
//             console.log('Order:', order);

//         })

//     })
// })

// Promises

function getUser() {
  return new Promise((resolve, reject) => {


    setTimeout(() => {
      resolve({
        id: 1,
        name: "John",
      });
    }, 1000);
  });
}

function getCart(userId) {
  return new Promise((resolve, reject) => {



    setTimeout(() => {
      resolve([
        { id: 101, name: "Iphone" },
        { id: 102, name: "Airpods" },
      ]);
    }, 2000);
  });
}

function createOrder(cart) {

    
  return new Promise((resolve, reject) => {
    // const error = true;

    // if(error){
    //     reject('Server Error')
    // }
    setTimeout(() => {
      resolve({
        orderId: "ORD123",
        items: cart,
      });
    }, 1500);
  });
}


// getUser()
//   .then((user) => {
//     console.log("User: ", user);

//     return getCart(user.id);
//   })
//   .then((cart) => {
//     console.log("Cart: ", cart);
//     return createOrder(cart);
//   })
//   .then((order) => {
//     console.log("Order: ", order);
//   })
//   .catch((erorr) => {
//     console.log(erorr)
//   })
//   .finally(() => {
//     console.log('Order is created')
//   })

  // promise hell


  // Async await


//   async function checkout() {
//     try {
//         const user =  await  getUser();
//         console.log("User: ", user);
  
//         const cart = await  getCart(user.id);
//         console.log("Cart: ", cart);
  
//         const order = await  createOrder();
//         console.log("Order: ", order);
        
//     } catch (error) {
//         console.log(error)
//     }

    
//   }

// checkout()

  



// console.log(1)

// const p = new Promise((resolve, reject) => {
//     console.log('2');
//     resolve();
//     console.log('3')
// })
// // executor function runs immediately 

// p.then(() => {
//     console.log('4')
// })

// console.log('5')


// output 12354


// console.log(1)

// new Promise((resolve, reject) => {
//     console.log('2');
//     resolve();
//     console.log('3')
// })
// // executor function runs immediately 
// .then(() => {
//     console.log('4')
// })

// console.log('5')

// output 12354



// new Promise((resolve) => {
//     console.log('A');
//     resolve('hello');
//     console.log('B')
// })
// // executor function runs immediately 
// .then((data) => {
//     console.log(data)
// })
// console.log('C')



new Promise((resolve) => {
    console.log('1');
    resolve();
    resolve();
    resolve();
    console.log('2');

})
// executor function runs immediately 
.then(() => {
    console.log('3')
})
// .then ensures that the callback runs only once