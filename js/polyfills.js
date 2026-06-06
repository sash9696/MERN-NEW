//reduce method

// Array.reduce((accumulator, currentValue) =>{} , initialValue)

// sum of numbers

// const nums = [10,20,30];

// // const total = nums.reduce((sum, num) => sum + num,0)

// const total = nums.reduce((acc, currentValue) =>{
//     acc = acc + currentValue;
//     return acc
// },0)

// console.log(total)

// Count occurrences

// const fruits = ['apple', 'banana', 'apple', 'orange','banana'];

// const count = fruits.reduce((acc, fruit) => {

//     acc[fruit] = (acc[fruit] || 0) + 1;

//     return acc;

// },{})

// console.log(count)

// {
//     apple:2,
//     banana:2,
//     orange:1
// }
// const user = {
// }

// user['name'] = 1

// group by

// const users = [
//     {name:'John', city:'Delhi'},
//     {name:'Mike', city:'Mumbai'},
//     {name:'Pete', city:'Delhi'},
// ]
// const grouped = users.reduce((acc, user) => {

//     if(!acc[user.city]){
//         acc[user.city] = []
//     }

//     acc[user.city].push(user)

//     return acc;

// }, {})

// console.log(grouped)

// output
// {
//     Delhi:[
//         {name:'John', city:'Delhi'},
//         {name:'Pete', city:'Delhi'},

//     ],
//     Mumbai:[
//         {name:'Mike', city:'Mumbai'},

//     ]
// }

// find maximum

// const nums = [5 , 20, 8, 100, 30]

// const max  = nums.reduce((acc, num) => {

//     return num > acc ? num : acc

// }, nums[0] )

// console.log(max)

// flatten array

// const arr = [[1,2], [3,4], [5,6]];

// const flat = arr.reduce((acc, curr) => {

//    return acc.concat(curr)

// }, [])

// const flat = arr.reduce((acc, curr) => {

//     acc.push(...curr)

//     return acc

// }, [])

// console.log(flat)

// // implement map using reduce

// const nums = [1,2,3];

// const doubled = nums.reduce((acc, num) => {

//     acc.push(num * 2);
//     return acc;

// }, [])

// output
// [2,4,6]

// implement filter using reduce

// const nums = [1, 2, 3, 4, 5, 6];

// const even = nums.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.push(num);
//   }

//   return acc;
// }, []);



// polifill for reduce

// reduce recieves 2 arguments
// decides the intial accumulator
// loop through the Array
// call the callback on every iteration
// stores the returned value back into the accumulator
// returns the final accumulator

// edge case 1 empty array + intial value

// [].reduce((a,b) => a + b, 100)

// loop will never run so just return acc


// edge case 1 empty array + no intial value
// [].reduce((a,b) => a + b)

// typeerror


// pseudo code

// acc = initiaValue

// for each in remaining item:
//     acc = callback(acc, currentItem)

// return acc


// Array.prototype.myReduce = function(callbackFn, initialValue){

//     const arr = this;
//     let accumulator;
//     let startIndex;

//     // initial value is provided

//     if(initialValue !== undefined){
//         accumulator = initialValue;
//         startIndex= 0;
//     }else{
//         accumulator = arr[0];
//         startIndex = 1
//     }

//     for(let i = startIndex; i < arr.length; i++){
//         accumulator = callbackFn(
//             accumulator,
//             arr[i],
//             i,
//             arr
//         )
//     }

//     return accumulator

// }


// const sum  = [10,20,30].myReduce((acc, curr) => acc + curr ,0)
// console.log(sum)



// pollyfil for promise.all
// wait for all the promises to resolve

// preserve the original order

//if any promise rejects . reject immediately

//returns a new promis



// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

const promise1 = Promise.resolve("A");
const promise2 = Promise.reject("Something went wrong in B");
const promise3 = Promise.resolve("C");



Promise.myAll = function(promises){

    return new Promise((resolve, reject) => {

        const results = [];
        let completed = 0;


        promises.forEach((promise, index)=>{
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completed ++;

                    if(completed === promises.length){
                        resolve(results)
                    }
                })
                .catch(reject)
        })

    })

}


Promise.myAll([promise1, promise2, promise3])
.then((values) => {
  console.log(values);
})
.catch(console.error)