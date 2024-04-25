//q1 - function - arr, target , return true , return false


// function ls(arr,tar){
//     for(let idx=0;idx<arr.length;idx++){
//         if(arr[idx]==tar){
//             return true;
//         }
//     }
//     return false;
// }

// let array=[10,20,30,40,50,60,70,80];
// let target=700;
// let ans=ls(array,target);
// console.log(ans);

//q2 - array - max , min,span=max-min

function span(arr){
    let max=arr[0]
    let min=arr[0]
    for(let idx=0;idx<arr.length;idx++){
        if(arr[idx]>max){
            max=arr[idx];
        }
        if(arr[idx]<min){
            min=arr[idx];
        }
    }
console.log("max is ",max);
console.log("min is ",min);

console.log("span is ",max-min);




}

let array=[10,20,30,40,50,60,70,80];
let ans =span(array)
console.log(ans);
