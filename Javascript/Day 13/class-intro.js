

// class Human{
//     name="vikas";
//     lastname="chaudhary";
//     age=27;
//     task=function(){
//         console.log("teaching");
//     }
// }

// let human1 = new Human();
// let human2= new Human()
// console.log(human1);
// console.log(human2);



// class Employee{
//     firstname;
//     lastname;
//     age;

//     constructor(){
//         this.firstname="vikas";
//         this.lastname="chaudhary";
//         this.age=27;

//         console.log(" m ek baar  hi chala");

//     }
// }

// let emp1= new Employee();
// let emp2= new Employee();
// console.log(emp1);
// console.log(emp2);
// console.log(emp1==emp2);




class Employee{
    firstname;
    lastname;
    age;
    task;

    constructor(fname,lname,age,task){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
        this.task=task;
    

    }
}

let emp1= new Employee("vikas","chaudhary",27,function(){
    console.log("teaching");
})
let emp2= new Employee("puneet","malik",28,function(){
    console.log("it");
})

 console.log(emp1);
 console.log(emp2);
 emp2.task();

// console.log(emp1.firstname);

