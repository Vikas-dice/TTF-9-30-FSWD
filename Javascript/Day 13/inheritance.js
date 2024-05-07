
// class Human{
//     nooflegs;
//     noofhands;
//     noofeyes;
//     constructor(legs,hands,eyes){
//         this.nooflegs=legs;
//         this.noofhands=hands;
//         this.noofeyes=eyes;
//     }
// }


// let human1 = new Human("2","2","2");
// console.log(human1);

// class Animal extends Human{

// }

// let animal1 = new Animal("2","4","4");
// console.log(animal1);



// // class Animal{
// //     nooflegs;
// //     noofhands;
// //     noofeyes;
// //     constructor(legs,hands,eyes){
// //         this.nooflegs=legs;
// //         this.noofhands=hands;
// //         this.noofeyes=legs;
// //     }

// // }

// // let animal1 = new Animal("2","4","4");
// // console.log(animal1);


class Human{
    firstname;
    lastname;
    age;
    constructor(fname,lname,age){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
    }
}

class Child extends Human{

}

let child1 = new Child("VIKAS","CHAUDHARY",27);
console.log(child1);
