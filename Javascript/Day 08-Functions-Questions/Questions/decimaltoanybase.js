

function DecimalToAnyBase(num,base){
    let ans =0;
    let power=1;
    while(num>0){
        let r=num%base;
        ans=ans+(r*power);
        num=Math.floor(num/base);
        power=power*10;
    }
    return ans;
}
let ans =DecimalToAnyBase(786,8);
console.log(ans);

