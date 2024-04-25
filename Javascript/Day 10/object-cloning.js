//object - copy - deep copy - 5 ways

// method 1 - spread operator

let obj1={
    name:"vikas",
    age:27,
    salary:10000,
    marks:75,
}
// let arr=[...obj1]
// console.log(arr);

// let obj2={...obj1}
// console.log("before ",obj1,obj2);
// obj1.gender="male";
// console.log("after",obj1,obj2);

//method 2 - iterate 
//for in loop - object 

// for(const key in obj1){
//     console.log(key,obj1[key]);
// }

//method 2 - iterate 

// let obj2={};
// for(const key in obj1){
//     obj2[key]=obj1[key]
// }
// console.log("after ",obj1,obj2);
// obj2.fun=function(){
//     console.log(" i am function ");
// }

// console.log("after 2",obj1,obj2);

//method 3- Object.assign()
// let obj2={};
// Object.assign(obj2,obj1);
// console.log(" after",obj1,obj2);
// obj1.gun=function(){
//     console.log("i am gun");
// }
// console.log("-------------------------------------------");
// console.log(" after 2",obj1,obj2);


//method 4 - strcuturecloning

// let obj2=structuredClone(obj1)
// console.log("after ",obj1,obj2);
// obj1.fungun=function(){
//     console.log(" i am fun gun");
// }
// console.log("after 2 ",obj1,obj2);


//method 5 


// let obj2=Object.assign(obj1)
// console.log("after ",obj1,obj2);
// obj1.fungunhun=function(){
//     console.log(" i am fun gun hun ");
// }
// console.log("after 2 ",obj1,obj2);


let object1={
    a:10,
    b:20,
    c:30,
    d:40,
}

let object2={}

Object.assign(object2,object1,{name:"vikas",age:27})
console.log("after ",object1,object2);

