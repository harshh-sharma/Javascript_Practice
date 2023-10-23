const myNums = [1, 2 , 3, 4, 5, 6 ,7 ,8 ,9 ,10];
// let myTotal = myNums.map( (num) => num*2 );
// console.log(myTotal);

// myTotal = myNums.filter( (num) => num%2==0 );
// console.log(myTotal);

myTotal = myNums.map((num) => num*2).map((num)=>num/2).filter((num)=> num + 1);
// console.log(myTotal);

myTotal = myNums.reduce((acc,curr) => {
    console.log(`Acc : ${acc} and Curr : ${curr} = ${acc+curr}`); 
    return acc + curr
 },0 );
console.log(myTotal);

let myBooks = [
    {
        title:'book 1',
        genre: 'History',
        publish:2001
    }
    {
        title:'book 1',
        genre: 'History',
        publish:2001
    }
    {
        title:'book 1',
        genre: 'History',
        publish:2001
    },
    {
        title:'book 1',
        genre: 'History',
        publish:2001
    },
    {
        title:'book 1',
        genre: 'History',
        publish:2001
    }
   
]