

class Parent{
    firstname="vikas";

    sayHello(){
        return "good morniing ";
    }
}

class Child extends Parent{
     firstname="puneet"

}

let child1= new Child();
console.log(child1.firstname);

