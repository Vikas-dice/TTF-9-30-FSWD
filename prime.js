let n =7;
let nod=0;
for(let div=2;div*div<=n;div++){
    if(n%div==0){
        nod =nod+1;
        break;


    }
   
}
if(nod>0){
    console.log("not prime",n);
}else{
    console.log("prime",n)
}

//



