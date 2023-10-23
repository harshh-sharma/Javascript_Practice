let arr = [3,5,4,1,9,0,32,89,0,100.54,123,8989],min,max,i;
min = arr[0];
max = arr[0];
for(i = 0 ; i < arr.length ; i++){
    if(min > arr[i]){
        min = arr[i]
    }
    else{
        if(max < arr[i]){
            max = arr[i];
        }
    }
}
console.log(min,max);