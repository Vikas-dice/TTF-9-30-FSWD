// function myFun(){
//     console.log("hello dunia");
//     return "vikas";
//     console.log("hello world ");
// }
// let rv=myFun();
// console.log(rv);



// function cube(n){
//     console.log("cube pof this number is ");
//     return n*n*n;
//     console.log("hello");
    
// }

// let ans=cube(5);
// console.log(ans);


//es5 - function statement , function expression , anonymous function


// function countNoOfDigits(num){
//     let nod=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         nod++;

//     }
//     return nod;
// }

// let ans =countNoOfDigits(781866);
// console.log(ans);








// let num=7818;
// let temp=num;
// let nod=0;
// while(temp>0){
//     temp=Math.floor(temp/10);
//     nod++;
// }
// console.log(num);
// console.log(temp);




















// function PrintFromFront(num){
//     let temp=num;
//     let nod=0;
//     while(temp>0){
//         temp=Math.floor(temp/10);
//         nod++;
//     }
//     let div=Math.pow(10,nod-1);
//     // console.log("---",div);

//     while(num>0){
//         let fd=Math.floor(num/div);
//         console.log(fd);
//         num=num%div;
//      div=Math.floor(div/10);

//     }
// }

// PrintFromFront(7867);


// function OddEvenCount(num){
//     let oddcount=0;
//     let evencount=0;

//     while(num>0){
//         let n=num%10;
//         if(n%2==0){
//             evencount++;

//         }else{
//             oddcount++;
//         }
//         num=Math.floor(num/10);
//     }
//     // return [oddcount,evencount];
//     return {ans1:oddcount,ans2:evencount}
    


// }


// let ans =OddEvenCount(7895324);
// console.log(ans);



//test 


function TestPalindrome(num){
    let n1=num/div;
    let n2=num%10;
    if(n1==n2){
        return true;
    }
    else{
        return false;
    }

    //update- 
}
