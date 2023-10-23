// console.log('Hello World');
// let name = 'Harsh';
// console.log('Hello'+ ' '+ name);
// console.log(typeof(name + 2 + 'Sharma'));
// console.log(typeof(name + '2' + 'sharma'));
// console.log(3+5*5/10%3);

// let age = 19;
// if(age > 18 ){
    // console.log('You are elegible to drink vodka');
// }
// else{
    // console.log('You are not elegible');
// }

// let a = 212 ,b = 54 ,c = 54 ;
// if(a>b){
//     if(a>c)
//         console.log(a,' is greater');
//     else
//         console.log(c,' is greater');
// }
// else{
//     if(b>c)
//         console.log(b,' is greater');
//     else
//         console.log(c,' is greater');
// }

// let a = 100 , b = 20 ;
// let result = a > b ? `${a} is greater`: `${b} is greater`;
// console.log(result);

// let i = 0 ;
// do{
//     console.log(i);
//     i++;
// }while(10 <= i);

// let i = 0 ;
// while(i<10){
//     console.log('harsh');
//     i++;
// }

// let i = 0 ;
// while(i<20){
//     if(i%2){
//         console.log(i +' is odd');
//     }
//     else{
//         console.log(i + ' is even');
//     }
//     i++;
// }


let n = 0 ;
for(j=n;j<20;j++){
    for(i=2;i<j;i++){
        if(j%i==0)
            break;
    }
    if(i==j){
        console.log(j + ' is a prime number');
    }
}