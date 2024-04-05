

// for(let row=1;row<=5;row++){

//     //starts
//     for(let st=5;st>=row;st--){
//         process.stdout.write("*")
//     }


//     //new line 
//     console.log();
// }


let nst=5;
for(let row=1;row<=5;row++){

    //stars
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")
    }

    // new line 
    console.log();

    //update nst
    nst=nst-1;
}