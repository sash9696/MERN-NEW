
// call, bind , apply method and their polyfills - home work

// console.log(this) -> points to window object


// function show(){
//     console.log(this) -> points to window object
// }

// show();

// inside object

// const user = {
//     name:'John',
//     show(){
//         console.log(this)
//     }
// }

// user.show(); -> points to user object

// const fn = user.show;
// fn()  -> points to window object


// const user = {
//     name:'John',
//     show: () => {
//         console.log(this)
//     }
// }


// const user = {
//     name:'John',
//     show(){
//         setTimeout(() => {
//             console.log(this.name)
//         }, 1000)
//     }
// }

// const user = {
//     name:'John',
//     show(){
//         setTimeout(function (){
//             console.log(this)
//         }, 1000)
//     }
// }

// user.show();


// call, apply, bind method
// u can change the refernce of this keyword


// const user1 = {
//     name:'John',

// }

// const user2 = {
//     name:'Peter',
// }

// function show(city, country){
//     setTimeout(() => {
//         console.log(`${this.name} is from ${city} and country ${country}`)
//     }, 1000)
// }

// show.call(user2, 'Mumbai');

// show.apply(user2,['Mumbai', 'India']);


// bind method -> use to to bind this with a function and use it later on

// const greet = show.bind(user1);

// greet('Mumbai', 'India')


class User{

    constructor(name){
        // instance properties
        this.name  = name;
        // this.show = this.show.bind(this)
    }

    // instance methods
    show(){
        console.log(this.name)
    }
}

const user  = new User('John')
const user1  = new User('Peter')

// console.log(user)

// user.show();

const fn = user.show;

// fn -> (){
//     console.log(this.name)
// }

fn()




