// this - confusing keyword - std defination - object bind krne k kaam aata h 
//this - diff diff situation 

let object={
    name:"vikas",
    age:27,
    gender:"male",
    ismarried:false,
    salary:10000,

    fun:function(){
        console.log(this.name);   
        console.log(this.ismarried);   
        console.log(this.age);  
    }
}

// object.fun();

// console.log(this.age);

//situation 2 - global 


console.log(this); //window object


//situation 3 - es5 function - this-window object

function fun(){

    console.log(this);
}
fun();

//situation 4 - es6 fun- fat arrow - this

let gun=()=>{
    console.log(this);
}

gun();

//situation 5- object - es5 fiun- method - this-parent object


let obj={
    name:"puneet",
    age:28,
    salary:5000,
    fun:function(){
        console.log(this);
    }
}
obj.fun();


//situation 6 - object - fat arrow fun-this-window object

let obj2={
    name:"dice",
    age:40,
    salary:1000,
    gun:()=>{
        console.log(this);
    }
}

obj2.gun();

//situation 7- object - es5 func (parent)-es5 fun(child)-this


// let obj3={
//     name:"ravi",
//     age:20,
//     salary:50000,
//     parent:function(){
//         function child(){
//             console.log(this);
//         }
//         child();
//     }
// }
// obj3.parent();


//situiation 8- parent es5 - child fat arrow- this- parent object


// let obj3={
//     name:"ravi",
//     age:20,
//     salary:50000,
//     parent:function(){
//         let child= ()=>{
//             console.log(this);
//         }
//         child();
//     }
// }
// obj3.parent();


//situation 9 - parent fat arrow - child es5 - this - window object

// let obj3={
//     name:"ravi",
//     age:20,
//     salary:50000,
//     parent:()=>{
//         function child(){
//             console.log(this);
//         }
//         child();
//     }
// }
// obj3.parent();


//situationn 10 - parent child fat arrow - this-window object
console.log("-----------------------------");

let obj3={
    name:"ravi",
    age:20,
    salary:50000,
    parent:()=>{
        let child= ()=>{
            console.log(this);
        }
        child();
    }
}
obj3.parent();
