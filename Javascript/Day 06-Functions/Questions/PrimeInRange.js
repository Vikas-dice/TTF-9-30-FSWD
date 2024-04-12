

let prime=function PrintPrimeInRange(start,end){

    for(let num=start;num<=end;num++){
        let nof=0;
        for(let div=2;div*div<=num;div++){
            if(num%div==0){
                nof++;
                break;
            }
        }
        if(nof==0){
            console.log(" prime ",num);
        }else{
            console.log(" not prime ",num);
        }
       
    }
}
// PrintPrimeInRange(20,150)
// PrintPrimeInRange(300,700)
// PrintPrimeInRange(3,15);
prime(20,50);



