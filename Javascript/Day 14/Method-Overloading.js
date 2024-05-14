
class Parent{
    firstname;
    lastname;

    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;
    }
    getFullName(){
        return this.firstname+" "+this.lastname;
    }
    area(l,b){
        return l*b;
    }
    area(side){
        return side*side;
    }
}

let p1 = new Parent("vikas","chaudhary")

// let ans=p1.area(5,10);
// console.log(ans);
let ans=p1.area(5);
console.log(ans);


