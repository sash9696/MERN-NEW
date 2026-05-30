
// without worker
// const clickBtn = document.getElementById('clickBtn');
// const heavyBtn = document.getElementById('heavyBtn');


// clickBtn.addEventListener("click", () => {
//     console.log("Button Clicked")
// })


// heavyBtn.addEventListener("click", () => {
//     console.log("Heavy task has been started")

//     let sum = 0;

//     // mock

//     for(let  i =0;  i < 5000000000; i++){
//         sum += i;
//     }

//     console.log("Heavy task has finished")

// })



// with worker


const clickBtn = document.getElementById('clickBtn');
const heavyBtn = document.getElementById('heavyBtn');


clickBtn.addEventListener("click", () => {
    console.log("Button Clicked")
})


heavyBtn.addEventListener("click", () => {
    console.log('Starting the worker...')
    const worker  =  new Worker('worker.js');

    worker.postMessage("start");

    worker.onmessage = function(e){
        console.log('worker finished', e.data);

        worker.terminate();
    }

    


})



// worker 
// a seprate js execution thread created by the browser

// it has
// its own call stack
// its own memory space
// its own event loop
// its own execution text