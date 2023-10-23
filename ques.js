let arr = [7,6,4,3,10],min,max,index,index2,i,result = 1;
min = arr[0];
index = 0 ;
for(i = 0 ; i < arr.length ; i++){
    if(min > arr[i])
    {
        min = arr[i];
        index = i;
    }
}
max = arr[index+1];
index2 = index+1;
for(i = index ; i < arr.length ; i++){
    if(index2 == arr.length){
        result = 0 ;
        break;
    }
    else{
        if(max < arr[i]){
            max = arr[i];
            index2 = i;
        }
    }
}
if(result == 0){
    console.log(0);
}
else{
    console.log(arr[index2]-arr[index]);
}