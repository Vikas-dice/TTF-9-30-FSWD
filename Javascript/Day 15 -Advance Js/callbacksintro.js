

// let arr=[10,20,30,40,50];


// arr.forEach(function(maal){
//     console.log(maal);
    
// })

// arr.forEach((data)=>{
//     console.log(data);
// })

// arr.forEach(data=>console.log(data))


// function testing(calback){
//     console.log(calback);

// }


// testing(123);






// function PrintMyAge(age){

//     console.log(age);
//     console.log(age);
//     return 1;
//     console.log(age);
//     console.log(age);
//     console.log(age);
//     for(let i=0;i<11;i++){
//         console.log("hello",i);
//     }

// }

// PrintMyAge(27);


// function testing(callback){
//     callback();
    
// }

// testing(()=>{
//     console.log("test 1");
// })


// function testing(tuyen){
//     console.log(tuyen);
//     tuyen();
   

// }

// testing(()=>{
//     console.log("test 1 ");
// });


function testing(callback){
    callback();

}

testing(()=>{
    console.log("test 1");
    testing(()=>{
        console.log("test 2");
        testing(()=>{
            console.log("test 3");

            testing(()=>{
                console.log("test 4");

                testing(()=>{
                    console.log("test 5");

                    testing(()=>{
                        console.log("test 6");
                    })
                })
            })
        })
    })
})




console.log("hello world")
