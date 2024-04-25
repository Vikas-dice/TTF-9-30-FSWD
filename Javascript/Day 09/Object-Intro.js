// {}

let mydetails={
    name:"vikas",
    lastname:"chaudhary",
    age:27,
    ismarried:false,
    salary:10000,
    marks:[10,20,30,40,50],
    sayHello:function(){
        console.log(" hello dice");
        return "good morning";
    },
    sayBye:()=>{
        console.log(" i am fat arrow function/method");


    },
    percentage:"75%",
    1:100,


}

//acccess 
// 1- .
//2 []

console.log(mydetails.ismarried);
console.log(mydetails.age);
console.log(mydetails.sayBye());
console.log(mydetails.sayHello());

//[]
console.log(mydetails['age']);
console.log(mydetails['ismarried']);
console.log(mydetails['1']);
console.log(mydetails['sayHello']());

//deep copy and shallo copy
//non - address - ram - same ghar - ghar m aag lgegi - dusre ghar p bhi refeclt hoygi

let obj1={
    name:"vikas",
    age:27,
    salary:10000,

}

let obj2=obj1;
console.log("before ",obj1,obj2);
obj1.marks=75;
console.log("after ",obj1,obj2);
obj2['gender']="male";
console.log("after 2",obj1,obj2);












