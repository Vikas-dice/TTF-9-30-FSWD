
/*
break- statement - apne sabse paas wale lopp se bahar fenk deti h


*/

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         for(let k =1;k<=5;k++){
//             console.log("vikas",i,j,k);
//             break;
//         }
//     }
// }

// for(let i=1;i<=5;i++){
//     console.log("vikas",i);
//     break;
//     console.log("hello dunia");
//     for(let j=1;j<=10;j++){
//         console.log("vikas");
//     }
// }


let i=1;
while(i<=2){
    for(let j=1;j<=5;j++){
        console.log("vikas",i,j);
        break;
        
    }
    i++;
}
console.log("loop k bahar ");