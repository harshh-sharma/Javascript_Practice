//  Arrays : Array is a linear colection of dismiliar or similar elements.Array indexing starts from 0 
// Array intialization
let arr = []  // Array intalize by square bracket

arr = [10,20,30,40,'Harsh',true,false]
console.log(arr);

console.log(arr[0]); // We can access array element by index

arr[1] = 15; //we can change the value using index number
console.log(arr);

// Array methods
let arr_1 = [10,20,30,40,50,60];

arr_1.push(70); // Push() : Push method add new element at the end of the array and return it
arr_1.push(80,90,100) ; // We can push multiple element seprating by (,)

arr_1.pop() ; // Pop() : Pop() method can remove the last element of an array and return it
console.log(arr_1);

arr_1.shift() ; //Shift() : Shift() method can remove the starting element of an array
console.log(arr_1);

arr_1.unshift(10) ; // Unshift() : Unshift() method can add the new element at the startingg of an array
console.log(arr_1);

console.log(arr_1.indexOf(20)) ; // indexOf() : indexOf() method can return the index of an element and return it

console.log(arr_1.slice(1,5)); // slice() : slice method can slice the array and return staring index is inclusive and end index is exculsive

arr_1.splice(2,1,10); ; /// splice() : splice method can take three argument starting index ,how much element you want to delete and adding value
console.log(arr_1);

console.log(arr_1.concat(arr)); // concat() : concat method can merge two arrays in one 

// function : function is a block of code once define and after we use many times during the program
// Benefits of function : 
// 1. Reusability of code
// 2. Easy to test
// 3. Define it ones and use it many times 

// Defining a function of Takes nothing and returns nothing nature
function printHello() // Defining a fuction
{
    console.log("Hello function");
}
printHello() ; // Calling a function

// Defining a function of Takes something and returns nothing nature
function substrationOfTwoNumbers(a , b){
    console.log("Substraction of ",a," and ",b," is ",a-b);
}
substrationOfTwoNumbers(20 ,10);

// Defining a function of Takes nothing and retuns something nature
function sayHello(){
    return 'Hello' ;
}
console.log(sayHello()) ;

// Defining a function of Takes something and returns something nature
function square(num) // Defining a function of takes something nature
{
    return num*num;
}
console.log(square(8)); // Calling a function by passing one argument

// Default Arguments
function Default(a=0,b=0,c=0,d=0){
    return a+b+c+d;
}
console.log(Default()); // Calling a function by passing zero argument
console.log(Default(10)); // Calling default function by passing one argument 
console.log(Default(10,20)); // Calling a default function by passin two argument
console.log(Default(10,20,30)); // Calling a default function by passing three argument
console.log(Default(10,20,30,40)); // Calling a default function by passing four argument

//  Argument object : Argument object present in function 
function sumOfNumbers(){
    let sum = 0 ;
    for(let i = 0 ; i < arguments.length ; i++){
        sum+=arguments[i] ;
    }
    return sum ;
}
console.log(sumOfNumbers(1,2,3,4,5,6,7,8,9,10,11)) ;

// Arrow function
let helloMessage = ()=> // Defining a Arrow function
{   
    console.log('Hello');
}
helloMessage(); // Calling Arrow function

let cube = (num) => // Defining a arrow function by taking argument
{
    return num*num*num;
}
console.log(cube(10)); // Defining a arrow function by passing argument in it

let checkEvenOdd = (num) =>{
    if (num%2){
        console.log('Number is odd');
    }
    else
    {
        console.log('Number is even');
    }
}
checkEvenOdd(10);
// Anonymous function
let x = function () // Defining Anonymous function
{
    console.log("Hello Anonymous Function");
}
x(); // Calling Anonymous function

let checkWhetherISNumberOrString = function (argument){
    if (typeof argument === Number){
        return "Number" ;
    }
    else if(typeof argument === String){
        return "string" ;
    }
    else {
        return 'Invalid argument' ;
    }
}
console.log(checkWhetherISNumberOrString(10));

// self-invoking function
(function exec(){
    console.log('Hello Self-invoking function');
})();

// Another way of making self-invoking function
(function (x){
    console.log(x*x);;
})(8);

(function (a,b){
    console.log("Sum of ",a," and ",b," is ",a+b);
})(10,20);

(function (a,b){
    console.log("Multiplication of ",a," and ",b," is ",a*b);
})(5,3);

// Objects : Object is a real world entity.Data store in object in the form of keys and values (keys and values seperated by colon )

let person = { // Defining object
    firstName : 'Harsh',
    lastName : 'Sharma',
    Age : 15 ,
    qualification : 'Btech'
}
console.log(person);

let student = new Object(); // make new object with (new) keyword and global object method
student.id = 101;
student.age = 21 ;
student.name = 'Harsh' ;
console.log(student); 

function Emp(id,salary,yearsOfExperience) // Defining a object by the help of function under this keyword
{
    this.id = id ;
    this.salary = salary ;
    this.yearsOfExperience = yearsOfExperience ;
}
const e = new Emp(100 , 20000 , 3);
e.name = 'Harsh' ; // Adding new element in object by using dot(.) operator
e['designation'] = 'Developer'; // Adding new element in object by using [] 
console.log(e);
console.log(e.id); // We can access value by using obj.key
console.log(e['yearsOfExperience']); // We can access value by using obj['key]
delete e.id;  // We can delete key value pair by using delete keyword 
console.log(e);

// Object methods 
let keys = Object.keys(e);  // keys method return the array of keys in string format of an object 
console.log(keys);

let values = Object.values(e); // values method return the array of values of an object
console.log(values);

let enteries = Object.entries(e); // enteries method return the keys and values in an array of an object
console.log(enteries);

Object.seal(e);   // seal method can allow only updation of values
e.id = 100 ;     // Is not possible beacuse only updaation is allow
e.salary = 30000 ; 
delete e.salary ; // Is not possible beacuse only updation is allow after seal method

Object.freeze(e); // freeze method can freeze the deletion updation of keys and values in an object
e.salary = 300000;
e.id = 102 ;
console.log(e);

let newEmp = Object.assign({x:1000},e); // assign method can copy key values in a new object
console.log(newEmp);