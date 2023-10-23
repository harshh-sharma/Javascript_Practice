// let a = 10 , b = 20 ;
// console.log("Sum of ",a," and ",b," is ",a+b);
// // console.log('Sum of a and b is '+' a+b');

// let arr = [1,2,3,4,'harsh hsrama',true,'false',false];
// console.log(arr);

// console.log(arr[0]);

// let arr1 = new Array(1,2,3,4,5,6);
// console.log(arr1);
// arr1[14] = 14;
// console.log(typeof arr1);
// arr1.push(2,3,4,5);
// console.log(arr1);

// let arr = 10 ;
// console.log(arr);

// var a = 10 , b = 20 ;
// var c = a+b;
// console.log(c);
// {
//     // var c = 10 ;
//     console.log(c);
// }


// function add(a,b){
//     var c = a+b;
    
// }
// c = add(10,20);
// console.log(c);

// let x = 20 ,arr = new Array();
// while(x){
//     arr.push(x);
//     x--;
// }
// console.log(typeof arr,arr);

// let b = new Array(10,20,30,40,50,60,70,80,90,100);
// console.log(b);
// console.log(b.length);
// console.log(b.indexOf(1000));
// console.log(b.pop());
// console.log(b.unshift(10));
// console.log(b);
// console.log(b.shift());
// console.log(b.shift());
// console.log(b);

// function displayMsg(msg='Hello User'){
//     console.log(msg);
// }
// displayMsg('Hello Harsh');

// function sumOfArrayValues(arr1){
//     let i,sum=0;
//     for(i=0;i<arr1.length;i++){
//         sum+=arr1[i];
//     }
//     return sum;
// }

// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(sumOfArrayValues(arr));


// function sumOfArrayValues(ar1=10){
//     let i,sum=0;
//     for(i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }

// console.log(sumOfArrayValues(30,40,50));

// 

(function exec(){
    console.log('named');
})();

(function (x){
    console.log(x*x);
})(7);

let greet = function () {
    return 'Hello Dear';
}
console.log(greet());