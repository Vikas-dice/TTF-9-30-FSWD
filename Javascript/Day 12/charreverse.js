// let str="vikas";
// let arr=str.split("");
// let start=0;
// let end =arr.length-1;
// while(start<=end){
//     let temp=arr[start]
//     arr[start]=arr[end];
//     arr[end]=temp;
    
//     start++;
//     end--;
// }
// console.log(arr.join(""));


let str="vikas chaudhary dice academy";
let arr=str.split(" ");
console.log(arr);
let start=0;
let end =arr.length-1;

for(let i=0;i<arr.length;i++){
    let name=arr[i];
  let namesplitted=name.split("");
 let start=0;
 let end =namesplitted.length-1;
 while(start<=end){
    let temp=namesplitted[start];
    namesplitted[start]=namesplitted[end];
    namesplitted[end]=temp;

    start++;
    end--;
 }
 console.log(namesplitted.join(""));
}

let object={
    name:"vikas",
    age:27
}
//method 1 -using spread oper
let object2={...object};
console.log(object);
console.log(object2);

//method 2 - using loop
let object3={};
for(const key in object){
    object3[key]=object[key];
}
console.log("=------------------");

console.log(object);
console.log(object3);


//method 3 - object.assign
let object4={}
Object.assign(object4,object);
console.log("-----------------------");
console.log(object);
console.log(object4);


//method 4 - structure cloning 
// let object5={}
let object5=structuredClone(object)
console.log(object);
console.log(object5);

//method 5 - merging 


let object6=Object.assign(object,object3,{a:10,b:20})
console.log(object);
console.log(object6);



let string="vikas chaudhary";
console.log(string.substring(2,8));
console.log(string.substr(2,8));



