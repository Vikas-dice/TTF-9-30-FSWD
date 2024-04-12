

function Pattern(n){
    for(let row=1;row<=n;row++){
        for(let col=1;col<=row;col++){
            process.stdout.write("*")
        }
        console.log();
    }
}

Pattern(100)