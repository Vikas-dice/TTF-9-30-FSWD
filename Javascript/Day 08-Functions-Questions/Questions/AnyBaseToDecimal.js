

function AnyBaseToDecimal(num,base){
    let ans =0;
    let power=1;
    while(num>0){
        let r=num%10;
        ans=ans+(r*power);
        power=power*base;

        num=Math.floor(num/10);
    }
    return ans;
}
let ans=AnyBaseToDecimal(512,8);
console.log(ans);
