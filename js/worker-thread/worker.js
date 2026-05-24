

onmessage = function(){

    console.log("Worker started Heavy task")

    let sum = 0;

    // mock
    // debugger
    for(let  i =0;  i < 5000000000; i++){
        sum += i;
    }

    postMessage(sum);
}