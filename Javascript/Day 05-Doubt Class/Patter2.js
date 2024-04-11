

for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
       
        if((row>1 && row<5) && (col>1 && col<5)){
            process.stdout.write(" ")

        }else{

            process.stdout.write("*")
        }
       
    }
    console.log();
}