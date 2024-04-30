

function students(fname,lname,age,fee,batch,teacher,task){
    this.firstname=fname;
    this.lastname=lname;
    this.umar=age;
    this.fee=fee;
    this.batch=batch;
    this.master=teacher;
    this.task=task;

}
let student1= new students("tuyen","ravi","20","paid","ttf 930","vikas",function(){
    console.log("stud");
})
let student2=new students("anand","kuamr",20,"not pad","ttf 930","vikas",function(){console.log("studies");})

console.log(student1);
console.log(student2);






