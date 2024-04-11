
let nst=1;
let nsp=2;

for(let row=1;row<=5;row++){
    //space
    for(let sp=1;sp<=nsp;sp++){
        if(row==3){
            process.stdout.write("*")


        }
        process.stdout.write("\t")
    }

    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*\t")

    }

    //new line
    console.log();

    //update
    if(row<3){
        nst=nst+1;
    }else{
        nst=nst-1;
    }
    

}
