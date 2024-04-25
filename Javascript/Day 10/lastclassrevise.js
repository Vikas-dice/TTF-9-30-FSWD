// pri- value pass

 let num1 =100;
 let num2=num1;
 console.log("  before ",num1,num2);
 num1=num1+200;
 console.log("after ",num1,num2);

//non prim - {}[]()

let array1=[100,200,300,400];
let array2=array1;
console.log("before ",array1,array2);
array1.pop();
console.log("after ",array1,array2);

//object

let obj1={
    name:"vikas",
    age:27,
}
let obj2=obj1;
console.log("before ",obj1,obj2);
obj1.marks=55;
console.log("after ",obj1,obj2);



