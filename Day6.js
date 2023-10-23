// // Exception Handling in JavaScript
// try{
//     console.log('Try block executed');
//     console.log(a);
// }
// catch{
//     console.log('Error should be handled');
// }
// console.log('Done');


// try{
//     console.log('Start try block');
//     console.log(y);
// }
// catch(err){
//     console.log('Error occur',err);
// }
// finally{       // finally block is optional  
//     console.log('finally block executed');
// }


// // class and objects
// class product   // We can define a class by using class keyword 
// {      
//     name;
//     rating;

//     // bhaviour = function = member function
//     display()
//     {
//         console.log('Our Product');
//     }
// }

// const p = new product();  
// console.log(p);
// p.display();  // We can call function by using (.) dot operator and class object


// // class constructor ,Default values with constructor
// // 1. if we don't make any constructor in class then compiler can make default constructor
// // 2. In class there only one constructor you can't make more then one constructor in a class that's why there is no concept of constructor overloading

// class Device {
//     price ;
//     rating ;
//     name ;

//     constructor(p,r,n){
//       this.price = p ;   // this keyword is present in every object we can access properties usinng this keyword
//       this.rating = r ;
//       this.name = n ;
//     }
// }
// const pro = new Device(100000 , 5 , 'iphone');
// console.log("Constructor call can automatically before this console");

// const new_pro = new Device(1500000 , 4 , 'macbook');
// console.log(new_pro);

// function newProduct(p , r , n) // this keyword is also present in classic function
// {
//     this.price = p ;
//     this.rating = r ;
//     this.name = n ;
// }
// const x = new newProduct(120000 , 4 , 'ipad');
// console.log(x);

// let fun = function(p,r,n) // this is also present in anonymous function
// {
//     this.price = p ;
//     this.rating = r ;
//     this.name = n ;
// }

// const x1 = new fun(150000 , 5 , 'samsung');
// console.log(x1);

// const fun2 = (p,r,n) => // but arrow can't have this keyword they not allowed arrow constructor
// {
//     this.price = p ;
//     this.rating = r ;
//     this.name = n ;
// }
// const x3 = new fun2(1000 , 5 , 'ipod');
// console.log(x3);


// class account{
//     balance ;
//     accountNumber ; // Public access specifiers
//     static rateOfInterest ;
//     #statement = null ; // Private access specifiers

//     constructor(b,accno , r){
//             this.balance = b ;
//             this.accountNumber = accno ;
//             this.rateOfInterest = r ;
//     }

//     static staticMethod(){
//         console.log('This is a static method ');
//     }
// }
// const obj = new account(10000 , 1234 , 5);
// console.log(obj);
// obj.staticMethod(); // We cannot can static member fuunction with the help of object they give error
// account.staticMethod(); // static method can call only by class name.staticmethod name

// // In javascript there are two access specifies public and private(#)
// console.log(obj.statement); // they give output undefined because statement property is a private memeber and we cannot access outside from thr class


// Closures : A closure is a combination of a function bundled together with reference to a surrounding state (the lexical enviornment).In other words we can say clouser give an access of outer functon from inner function

// function score(){
//     let scoree =  0 ;
//     console.log(scoree);
// }
// score() ;
// console.log(scoree); // They gives error the scoree is not defined

let scoree = 0 ;
function score(){
    console.log(scoree);   // there is no variable scoree in score function then they take refrence of gobal declaration
    scoree = 10 ; //The change should be in global reference
}
score();
console.log(scoree);

function outerfun()
{
    let  x = 'I am at level 1 ';
    function innerfun(){
        console.log(x);
        y = 'I am a inner variable and no outer function can access me';
    }
    // console.log(y);
    innerfun();
    
}
outerfun();

const globalVar = 'This is global variable';
function outerblock(){
    let val1 = 1 ;
    console.log(globalVar);
    function innerfunc(){
        let val2 = 2 ;
        console.log(val2,val1,globalVar);

        function innerOfinnerfunc(){
            let val3 = 3 ;
            console.log(val3,val2,val1,globalVar);
        }
        innerOfinnerfunc();
    }
    innerfunc();
}
outerblock();

// Example of clouser
function superfun(){
    let x = 'I am a outer function and only inner can access me';
    function slowfun(){
        console.log(x);
    }
    slowfun();
}
superfun();