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


function anybasetoanybase(num,b1,b2){
    let decnum=AnyBaseToDecimal(num,b1);
    let ans=DecimalToAnyBase(decnum,b2);
    return ans;

}

let ans =anybasetoanybase(512,8,2);
console.log(ans);
