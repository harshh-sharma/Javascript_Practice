// Console.log method in javascript
console.log('Harsh Sharma');// we can use single quote and double quotes also to print
console.log("Welcome to the  world of javascript");


// dataTypes in javascript 
// There are two types of dataTypes present in javascript
// 1. primitiveDataTypes 
// 2. Non - primitiveDataTypes

// 1.primitiveDataTypes
// - Numbers : 10,7.6,0,-1,-100,65
console.log(10);

// - string : 'Harsh' or "Harsh"
console.log("Harsh Sharma");

// - boolean : true or false 
console.log(true);
console.log(false);

// undefined : undefined there is no value to be assign
let x ;
console.log(x); //they should the print the value of x is undefined

// - Null : null means nothing 
let y = null;
console.log(y);

// 2. NonPrimitiveDataTypes
// -arrays : collection of disimillar dataTypes
let arr = ['Harsh' , 'javascript' ,10 ,-100 , true , false ];
console.log(arr);
console.log(typeof arr); // type of arr is object
console.log(arr[1]); // we can access the array values by index number like arr[0] 
arr[2] = 'Java'; // we can replace old value by new value using index number
console.log(arr['2']); // we can access the element by index under string format

// 

// array properties and methods
console.log(arr.length); // length property return the length of an array
arr.push('C','C++'); // Push method push the element at the end of the array and return new length of an array
console.log(arr.push(10)); // 10 value should be push at the end of an array and return new length of an array
// array methods are so many like push(),pop(),append() etc

// nonPrimitiveDataType 
// - object {}

// Declaration in javascript
// In javascript there are three keywords let , var and const by this keyword we used to declare a variable
// let : let is local scoped declaration in javascript
let fullName = 'Harsh Sharma' ;
// One more example of let 
let number = 1;
if(number == 1){
    let number = 2;
    console.log(number); // output = 2;
}
console.log(number); //output = 1 ;


// var : var is globally scoped delaration in javascript
var newNumber = 10 ;
if (newNumber == 10 ) {
    newNumber = 20 ;
    console.log(newNumber);
}
console.log(newNumber);

// const : const is declaration of constant that can't be reassigned or redeclare during throw out of a program
 const fatherName = 'Ram';
 console.log(fatherName);
//  fatherName = 'shyam' // error occur beacuse const variable can be changed 
//  const age ; // error occur beacuse intalization is compulsory when you declare a const variable

// Program 
let pwCoursePrice = 2000 ;
const gstOnCourse = 200 ;
let finalCoursePrice = pwCoursePrice + gstOnCourse ;
console.log('Final course price of PW skills is ',finalCoursePrice);

// operators + , - , * , / , % , **
let firstValue = 10 , secondValue = 20 ;
console.log('Addition of ',firstValue ,'and ',secondValue,' is ',firstValue + secondValue);
console.log('Substraction of ',firstValue ,'and ',secondValue,' is ',firstValue - secondValue);
console.log('Multiplication of ',firstValue ,'and ',secondValue,' is ',firstValue * secondValue);
console.log('Divsion of ',firstValue ,'and ',secondValue,' is ',firstValue / secondValue);
console.log('Modulus of ',firstValue ,'and ',secondValue,' is ',firstValue % secondValue);
console.log('Exponent of 2 and 2 is ' ,2 ** 2);

// operators == , === , > , < ,>= , <= , !=
let newNumberone = 2 , newNumberTwo = 3 ;
console.log(newNumberone == newNumberTwo);
console.log(newNumberone > newNumberTwo);
console.log(newNumberone < newNumberTwo);
let a = 2 , b= '2'
console.log(a == b); // output : true beacuse they can convert the string in number and compare then the result is true
console.log(a === b); // output : false beacuse they can check type also then they evaluate false
console.log(a !== b);

// operators : && , ||
let cardDeatils = true ;
let isLoggedIn = true ;
console.log(cardDeatils && isLoggedIn); // both condition true then only be && sholud evaluate true otherwise false

let isLoggedInFromGmail =  true ;
let isLoggedInFromFacebook =false ;
let isLoggedInFromGithub = false ;
console.log(isLoggedInFromGmail || isLoggedInFromFacebook || isLoggedInFromGithub); // if one condition is evaluate true the result will be true in ||  