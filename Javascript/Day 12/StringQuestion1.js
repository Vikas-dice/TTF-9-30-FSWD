// let str="vik6as chau6d6hary di6ce acad6emy";
// console.log(str.split("6"));
// // console.log(str);


// str= vikas chaudhary dice academy - revser academy dice chaudhary vikas


let str="vikas chaudhary dice academy";
let splittedarr= str.split(" ");
// console.log(splittedarr);


let start=0;
let end=splittedarr.length-1;


while(start<=end){
    let temp=splittedarr[start];
    splittedarr[start]=splittedarr[end]
    splittedarr[end]=temp;


    start++;
    end--;

}

console.log(splittedarr);

