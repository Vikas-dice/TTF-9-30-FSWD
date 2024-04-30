
let array=["vikas","puneet","sahil","tanay","ashish"]
//mutable and immutable 

array[1]="rohan";
array[2]="parekh";
console.log(array);

let name="vikas chaudhary";
// name="vikzs cyaudhary";
name[3]="z";
name[7]="y";
console.log(name);


//STRING - INBUILT METHOD
//LENGTH
console.log(name.length);
//charAt
console.log(name.charAt(8));
//includes - return true or false

console.log(name.includes("kasa"));


//indexof
console.log(name.indexOf("y"));


//startswith
console.log(name.startsWith("vik"));

//endsWith
console.log(name.endsWith("ary"));

//substring , substr

console.log(name.substring(2,9));
console.log(name.substring(3));
console.log("------------------");
console.log(name.substring(8,4));
console.log(name.substring(-4,-6));
console.log(name.substring(-6,-1));





//substr
// console.log(name.substr(2,9));
// console.log(name.substr(4));
console.log(name.substr(8,4));
console.log(name.substr(-4,-6));
console.log(name.substr(-6,-1));


//slice 





