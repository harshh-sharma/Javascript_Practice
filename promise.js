const promiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async task is done');
        resolve()
    },1000);
})

promiseOne.then(() => {
    console.log('Promise consumes successfully');
}).catch();

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Task 2");
        resolve();
    },2000)
}).then(() => {
    console.log('Task 2 done');
})

const promiseThree = new Promise((resolve,reject) => {
    resolve({username: 'Harsh',email:'harsh@google.com'},1000);
})

promiseThree.then((user) => {
    console.log(user);
    console.log(user.username);
}).finally(() => {
    console.log('Promise should be rejected or resolve');
})

const promiseFour = new Promise((resolve,reject) => {
    let Async = false ;
    if(Async){
        resolve({username : 'Honey',email : 'honey@yahoo'});
    }
    else{
        reject('Error occur');
    }
})
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((e) => {
    console.log(e);
})

const promiseFive = new Promise((resolve,reject) => {
        setTimeout(() => {const Async = false ;
        if(Async){
            resolve({name:'Js',password : 123});
        }else{
            reject('Js went wrong');
        }},1000);
});

async function consumePromiseFive(){
    try {
        let response = await promiseFive 
       console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function  consume(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consume();

