function myFunction(){
    console.log("hello world!!")
    console.log("i am freasher")
}
myFunction()

function Massege(msg,msg){//parameter
    console.log(msg*msg)
}
Massege("I love JS","developer")//argument

//function -> 2 numbers sum
function sum(a,b){
    //local variables ->block scope bhr define ni kr skte
    console.log(a+b)
}
sum(5,7)

const arrow=(a,b)=>{
   console.log( a+b);
}
arrow(9,10);

const multi=(x,y)=>{
    console.log(x * y)
}
multi(10,10)

//practice
function countVowels(str){
    let count =0;
    for(const char of str){
        if(char==="a" || char==="e" ||char==="i" ||char==="o" ||char==="u"){
            count++;
        }
    }
        console.log(count)
    }
    countVowels("ankita atoliya")

    //practice
    const Countvow =()=>{
        let count =0;
    for(const char of str){
        if(char==="a" || char==="e" ||char==="i" ||char==="o" ||char==="u"){
            count++;
        }
    }
        console.log(count)
    }
    countVowels("ankita dhakad")

    //foreach

let arr=[1,2,3,4,5];
arr.forEach(function printValue(val){
    console.log(val);
});
arr.forEach((val) =>{
    console.log(val)
})
    
let num =[71,52,83,64,55]
num.forEach((nums)=>{
    console.log(nums*nums)
})

let nums =[10,20,30]
let newArray=nums.map((val)=>{// map return new array
    return val * 2;
  //  console.log(val);
})
console.log(newArray)

let arr2=[2,3,4,5,6,7,8]
let newSum=arr2.filter((val)=>{
    return val % 2 ===0
})
console.log(newSum)

let arr3=[4,7,9,6,5,3]
const newArr3=arr3.reduce((curr,res)=>{
    return curr +res;
})
console.log(newArr3);

let arr5=[9,12,8,7,6,5]
const output =arr5.reduce((prev,curr)=>{
    return prev>curr ? prev :curr;//largest value print
})
console.log(output)

let n =prompt("enter a number: ")
let arr6=[];
for(let i=1;i<=n;i++){
    arr6[i-1]=i
}
console.log(arr6)