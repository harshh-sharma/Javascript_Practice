// HOF(Higher Order Function) : Higher order function means we can pass function as a argument and also we can return a function
let square = (num) =>{
    return num * num ;
}
function cube(square , num ){
    return square(num) * num ;
}
console.log(cube(square,10));

// one more example
const evenOdd = (num)=>{
    if(num%2){
        return 'odd' ;
    }
    else{
        return 'even' ;
    }
}
function sayHelloWithEvenAndByWithOdd(evenOddd , num){
    if ('even' == evenOdd(num))
    {
        console.log('Hello even');
    }
    else{
        console.log('Bye odd');
    }
}
sayHelloWithEvenAndByWithOdd(evenOdd , 10 );
sayHelloWithEvenAndByWithOdd(evenOdd , 9 );

// when we call a function and return a function and then assign in a variable then the return function copy in variable
function sayHello(){
    return() =>{
        console.log('Hello there');
    }
}
let msg = sayHello();
console.log(msg); // anonymous function store in msg variable
msg(); // variable execute like a function

// Nesting of function
const funOne = (m)=>{
        const funTwo = (n)=>{
            const funThree = (p)=>{
                return m+n+p ;
            }
            return funThree;
        }
        return funTwo ;
}
console.log(funOne(3)(2)(5)); // calling nested function like this 

// one more example
const higherOrderFunction = (p) => {
    const funnOne = (q) => {
        const funnTwo = (r) => {
            const funnThree = (s) => {
                return p+q+r+s ;
            }
            return funnThree ;
        }
        return funnTwo ;
    }
    return funnOne ;
}
console.log(higherOrderFunction(2)(3)(4)(5));

// one for use of Higher order function
let myArray = [10 ,20 ,30 ,40 ,50 ,60];
function sumOfArrayElements(array){
    let sum = 0 ;
    array.forEach(element => {
        sum+=element ;
    });
    return sum ;
}
console.log(sumOfArrayElements(myArray));

// one for example
myArray = [1,2,3,4,5,6,7];
const multiplicationOfElementOfAnArray = (array) =>{
    let multiply = 1 ;
    array.forEach(element=>{
        multiply*=element ;
    });
    return multiply ;
}
console.log(multiplicationOfElementOfAnArray(myArray));
console.log(myArray);

// setTimeInterval
function oneMoreHello(){
    console.log('Hello Learner ', Math.random());
}
// setInterval(oneMoreHello,1000); //calling setInterval method

// setTimeOut 
function sayHelloOnlyOneTime(){
    console.log('Hello One Time');
}
setTimeout(sayHelloOnlyOneTime,3000);

// forEach 
let array = [10,20,30,40];
array.forEach(function(index,value,array){
    console.log(index,value,array);
})

array.forEach((index,value,array)=>{
    console.log('arrow ',index,value,array);
}) 

array = ['c','c++','java','python'];
array.forEach((el)=>{
    console.log(el.toUpperCase());
})

// Map
array.map((element , index , array)=>{
    console.log(element , index , array);
})

// filter : filter method filter the upon the condition if condition was then only they return the element
let result = array.filter((element)=>{
    return element.endsWith('++');
})
console.log(result);

// one more example with filter method
array = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11];
let onlyEven = array.filter((element)=>{
    return element%2==0 ;
})

console.log(onlyEven);
array = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11];
let onlyOdd = array.filter(function(element){
    return element%2!=0 ;
})
console.log(onlyOdd);

// Reduce : reduce method can contain previous value and current value of an array
let cartItemPrice = [20,30,40,10,100];
let cartTotalBill = cartItemPrice.reduce((previous,current)=>{
    return previous+current;
})
console.log(cartTotalBill);

// every method
let check = array.every((element)=> typeof element === 'number');
console.log('Check ',check);
array.push('Harsh');
check = array.every((element)=> typeof element === 'number');
console.log("Check ",check);

// find
let score = [100,322,990,55,21,11];
let gameScore = score.find((score)=> score> 100);
console.log(gameScore);