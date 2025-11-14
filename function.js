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
    
