
// function Employee(){
//  this.firstname="vikas",
// this.lastname="chaudhary";
// this.age=27;
// this.address="delhi";
// }

// let emp1= new Employee();
// let emp2= new Employee();
// console.log(emp1);
// console.log(emp2);


// function Testing(){
//     console.log("i am testing");
// }
// let t1= new Testing();
// let t2= new Testing();
// console.log(t1);
// console.log(t2);
// console.log(t1==t2);


// function Employee(){
//     this.fristname="vikas";
//     this.lastname="chaudhary";
//     this.age=27;
//     this.task=function(){
//         console.log(" teaching");
//     }
// }

// let emp1= new Employee();
// let emp2= new Employee();
// console.log(emp1);
// console.log(emp2);


// console.log(emp1==emp2);


// function Employee(fname,lname,age,task){
//     this.firstname=fname;
//     this.lastname=lname;
//     this.age=age;
//     this.task=task;


// return this;

// }

// let emp1= new Employee("vikas","chjaudhary",27,function(){console.log("teaching");})
// let emp2= new Employee("puneet","malik",28,function(){
//     console.log(" it");
// })
// // console.log(emp1);
// // console.log(emp2);
// emp1.task();
// console.log(emp1.firstname);
// console.log(emp1.age);




//new.target


// function testing(){
//     console.log(new.target);

// }

// let t1= new testing();
// console.log(t1);


//optional chaining  

let object={
    name1:{
        firstname:"vikAS",
    lastname:"chaudhary",

    },
    nums1:[10,20,30],
    fun1:function(){
        console.log(" hello dice ");
        return "javascript";
    }
    
}
console.log(object.name); //undefined
console.log(object.name1?.firstname); //undefined.firstname
console.log(object.name?.lastname);
console.log(object.nums1?.[0]);
console.log(object.fun1?.());
console.log("hellow world");


