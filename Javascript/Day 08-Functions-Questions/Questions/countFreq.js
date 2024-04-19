/*
78647898788, target=7



*/

function digitFrequency(num,target){
    let count=0;
    while(num>0){
        let ld=num%10;
        if(ld==target){
            count++;
        }
        num=Math.floor(num/10);
    }
    return count;
}
let ans=digitFrequency(7897567789,7);
console.log(ans);
