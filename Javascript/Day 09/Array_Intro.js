

let array=[10,20,30,40,50];
console.log(array[3]);
/*
array[3]= 2050+3*4=2050+12=2062


*/

let array2=[10,20,30,40,50,55.60,true, false, [1,2,3],'a','b','c',"vikas",function myfun(){
    return "hello dice";
},function myfun2(){}]

console.log(array2.length);
console.log(array2[13]());



//deep copy and shallow copy

// data types - priitmive and non primi
//prim= number boolean null undefiend string symbol 

//non prim- array object function {}[]()

//deep copy and shallow copy

let num1=10;
let num2= num1; //10
console.log("before ",num1,num2); 
num1=num1+5;
console.log("after ",num1,num2); //100,10

//no0n primit- address 

let arr1=[10,20,30];
let arr2=arr1;
console.log("before ",arr1,arr2);
arr1.pop(); //pop= 
console.log("after ",arr1,arr2);
arr2.push(100);
console.log("after 2",arr1,arr2);









