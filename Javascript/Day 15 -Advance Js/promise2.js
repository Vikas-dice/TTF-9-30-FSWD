

let items=["pen","pencil","eraser","notebook"];

let promise = new Promise((resolve,reject)=>{
    if(items.includes("pen1")){
        resolve("pen mil gya")

    }else{
        reject("pen nahi mila")
    }






})

promise.then(data=>console.log(data)).catch(error=>console.log(error))

for(let i=0;i<6;i++){
    console.log("vikas",i);
}





