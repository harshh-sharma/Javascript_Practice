function target(arr,size,target){
let i,sum=0,arr2=[];
for(i=0;i<arr.length;i++){
    if(sum == target){
        return arr2;
    }
    else {
        if((sum+arr[i])> target){
            continue;
        }
        else{
            sum+=arr[i];
            arr2.push(i);
        }
    }
}
}

let arr=[2,7,11,15,1,3,4,1,2],temp=11;
arr1 = target(arr,arr.length,temp);
console.log(arr1);