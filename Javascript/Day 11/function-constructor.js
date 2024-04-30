// let vikas={
//     name:"vikas",
//     lastname:"chaudhary",
//     age:27,
//     salary:10000,
//     address:"delhi",
//     task:function(){
//         console.log("teaching");
//     },
//     academics:["10th","12th","Btech"]

// }

// let jugal={
//     name:"jugal",
//     lastname:"kumar",
//     age:22,
//     salary:5000,
//     task:function(){
//         console.log("office sever");
//     },
//     academics:["5th","8th","10th","12th"]
// }


// let saviour={
//     name:"saviour",
//     lastname:"basu",
//     age:29,
//     salary:20000,
//     tasj:function(){
//     console.log(" batch mgmt");
//     },
//     academics:["10th","12th","mba"]

// }

function Employee(name,lastname,age,salary,task,academics){
    this.name=name;
    this.lastname=lastname;
    this.age=age;
    this.salary=salary;
    this.task=task;
    this.academics=academics;




}
let emp1=new Employee("vikas","chaudhary",27,10000,function(){console.log("teaching");},["10th","12th","Btech"]);
let emp2= new Employee("jugal","kumar",22,5000,function(){console.log("office serve");},["5ht","8th"]);
let emp3=  Employee("saviour","basu",28,20000,function(){console.log("batch mgmt");},["10th","12th","mba"]);

console.log(emp1);
console.log(emp2);
console.log(emp3);



