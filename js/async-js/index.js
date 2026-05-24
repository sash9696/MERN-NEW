
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



console.log("Start")

setTimeout(function(){
    console.log('Timer done')
}, 0)

function blockForOneSec(){
    const start  = Date.now();

    while(Date.now() - start < 1000){};

    console.log('block')
}
blockForOneSec();

console.log("End")

