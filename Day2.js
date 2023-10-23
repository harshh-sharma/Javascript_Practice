// Decision Control Statement
// if : if is a keyword if condition is true then only be if block executed
let age = 19 ;
if (age >= 18){
    console.log('Allowed to give vote');
}

// if else : if condition true then if block executed and if it is false then else block executed
age = 17 ;
if (age >= 18){
    console.log('Elegible to give vote');
}
else{
    console.log('Not elegible to give vote');
}

// if elseif : When multiple condition to check and only one condition can be executed then we use ifelse ladder
let trafficSignal = 'red';
if (trafficSignal == 'red'){
    console.log('Stop signal is red');
} 
else if(trafficSignal == 'Orange'){
    console.log('Go slow signal is orange');
}
else if (trafficSignal == 'green'){
    console.log('Go fast signal is green');
}
else{
    console.log('Invalid signal');
}

// switch case : switch case executed only when the matching case is come and encountred by break keyword
let fruit = 'Pappaya' ;
switch(fruit)
{
    case 'orange':
        console.log('orange');
        break;
        case 'Pappaya':
            console.log('Pappaya');
            break;
            default:
                console.log('Mango');
}

// Loops in javascript
// while : while loop is a entry control loop if while condition true then only be they executed otherwise not
let i = 1 ;
while(i<=10){
    console.log(i);
    i++;
}

// do while loop : do while loop is a exit control loop condition 