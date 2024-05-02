

let str ="vikas chaudhary dice academy";
let arr= str.split(" ");
for(let i=0;i<arr.length;i++){
    let word=arr[i].split("");
    // console.log(word);
    let start=0;
    let end=word.length-1;
    while(start<=end){
        let temp=word[start];
        word[start]=word[end];
        word[end]=temp;
        start++;
        end--;

    }
    console.log(word.join(""));
}