// const user = {
//     userName: 'Honey',
//     age: 18,
//     gender: 'male',

//     greeting: function greeting(){
//         console.log('Hello ',this.userName);
//     }
// }
// console.log(user.age);
// console.log(user.greeting());
// console.log(user);

function createUser(userName,age,gender,sayHello){
    this.userName = userName;
    this.age = age;
    this.gender = gender; 
    
    this.sayHello = sayHello
    return this;
}

const userOne = new createUser('Honey',20,'Male',function sayHello(){console.log('SayHello');});
const userTwo = new createUser('Harsh',20,'Male',function sayHello(usernaame){console.log(`Hello ${this.userName}`);});
console.log(userOne.sayHello());
console.log(userTwo.sayHello('Harsh'));
console.log(userOne);
console.log(userTwo);
console.log(userOne.userName);
