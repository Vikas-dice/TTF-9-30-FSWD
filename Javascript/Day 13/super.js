class Parent{
    firstname;
    lastname;
    age;
    task;

    constructor(fname,lname,age,kaam){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
        this.kaam=kaam;
    }
}

class Child extends Parent{

    constructor(firstname,lastname,umar,task){
        super();
        this.firstname=firstname;
        this.lastname=lastname;
        this.umar=umar;
        this.task=task;

    }

}

let child1= new Child("vikas","chaudhary",27,function(){console.log("teaching");});
console.log(child1);

