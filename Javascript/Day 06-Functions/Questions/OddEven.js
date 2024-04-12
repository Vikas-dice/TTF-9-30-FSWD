

function OddEven(start,end){
    for(let num=start;num<=end;num++){
        if(num%2==0){
            console.log("even ",num);
        }else{
            console.log("odd ",num);
        }
    }
}

OddEven(20,180);
