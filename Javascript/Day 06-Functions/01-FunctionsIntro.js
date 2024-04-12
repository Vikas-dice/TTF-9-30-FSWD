// let rv=console.log();
// console.log(rv);


//ES5

// function sayHello(){

//     console.log("hello vikas");

// }

// //ivnoke/call

// sayHello();
// function sayHello(){
//     console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");


// console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");
// console.log("hello vikas");


// }

// sayHello();
// sayHello();


//es 5 - function statement , function expression , function with parameters , anonymous

//function statement

function SayMyName(){
    console.log("vikas");
}

SayMyName();

//function expression - js -first class memebrs

let fun=function SayHello(){
    console.log("hello dunia");
}
// fun();
// SayHello();

//functions with paraemetrs

function PrintMyAge(age){
    console.log("you are -"+age+"years old");

}



//anonymous - naame nahi hota

// let fun2=function (){
//     console.log("hello dice");
// }
// fun2();

PrintMyAge(27);


// let details=function PrintMyDetails(age,salary,designtion,address,name){
//     console.log(age,salary,designtion,address,name);

// }

// details(27,10000,"trainer","delhi","vikas");


//

// function myDetails(age,name,salary){
//     console.log(age,name,salary);
// }

// myDetails(27,"vikas",10000,"delhi","not married")

//es6 - fat arrow function 
//syntax - ()=>{}

// let details=()=>{
//     console.log("hello vikas");
// }
// details();


//fat arrow function with multi params

let details=(age,name,salary)=>{
    console.log("vikas");
    console.log(age,name,salary);
}

details(27,"vikas",10000,9999999)

details(27,"vikas",10000,9999999)
details(27,"vikas",10000,9999999)
details(27,"vikas",10000,9999999)

//fat arrow function with just 1 para

let myname=name=>console.log("hello",name);


myname("vikas")

