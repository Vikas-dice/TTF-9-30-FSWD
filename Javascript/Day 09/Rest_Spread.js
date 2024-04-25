//es6 

// function sum(a,b,c){
//     return a+b+c;
// }

// let ans=sum(100,200,null);
// console.log(ans);
/*
100+200+undefined
300+undefined
300+NaN= ILLEGAL NUMBER =NaN

100+200+NULL
100+200+0
300


*/

// function sum(...a){
//     // console.log(a);

// }

// sum(100,200,300,400,500,600)

//spread - deep copy - non primitive - data type


let array1=[10,20,30,40,50];
let array2=[...array1,60,70]
console.log("before",array1,array2);
array1.pop();
console.log("after ",array1,array2);
array2.push(100);
console.log("after 2",array1,array2);

let obj1={
    name:"vikas",
    age:27,
    salary:10000,
}

let obj2={...obj1};
console.log("before ",obj1,obj2);
obj1.gender="male";
console.log("after ",obj1,obj2);







