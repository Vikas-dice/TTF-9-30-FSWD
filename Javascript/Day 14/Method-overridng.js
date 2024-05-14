class Parent{
    firstname;
    lastname;
    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;
    }

    sayHello(){
        return "good morning "
    }
}

class Child extends Parent{
    sayHello(){
        return "good night"
    }

}

let child1 = new Child("puneet","chaudhary");
console.log(child1.sayHello());