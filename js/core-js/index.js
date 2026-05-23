// js is a synchronous , single threaded  language

// var message = 'hello world';

// console.log(message)

// function x(){
//     var num = 10;
//     console.log(num)
// }

// x();

// var greet = 'greetings';

// console.log(greet)

// function x() {
//   console.log(10);
// }

// function y() {
//   console.log(20);
// }

// x();

// y();

// function x() {
//   var a = 10;

//   function y() {
//     var b = 20;

//     console.log(b);

//     function z() {
//       console.log(a);
//     }
//     z();
//   }
//   y();
// }

// x();



// hoisting 
// let vs const vs var


// console.log(num);
// var num = 10;


// x();

// function x(){
//     console.log(10)
// }

// temporal dead zone
// console.log(num);
// let num = 10;




// let and const are blocked scope

// let a  =10
// {
// let a = 20
// console.log(a)

// }

// console.log(a)

//var is a function scoped

// var a  =10
// {
// var a = 20
// }

// console.log(a)


// Closures

// function outer(){
//     var count  = 0;

//     function helper(){
//         console.log('helper')
//     }

//     function inner(){
//         count ++;
//         helper();
//         console.log(count)
//     }

//     return inner;
// }

// var counter =  outer();
// counter();
// counter();
// counter();



function outer(){
    var count  = 0;

    function increment(){
        count ++
        console.log('Incrmenet: ', count)
    }

    function decrement(){
        count --
        console.log('Decrement: ', count)
    }

    function getCount(){
        console.log('Current : ', count)
    }

    return{
        increment,
        decrement,
        getCount
    }
}

var counter =  outer();

counter.increment();
counter.increment();
counter.decrement();
counter.getCount();