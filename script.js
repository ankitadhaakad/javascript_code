//arthematic operator
let a =10;
let b = 4;
console.log("a = ",a,"& b = ",b)
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);
console.log("a ** b=",a**b);

//unary operator

//a = a=1;
a++;

console.log(a)
a--;
console.log(a);
console.log("--a =",--a)
console.log("a= ",a)

//assignment operator
let c =5;
let d =2;
c += 4; //c =c+4
c -= 3;
c *=5;
console.log("c =",c)

//comparison operator
let i =8;
let j = 10;


console.log("8==10",i==j);
console.log("8>=10",i>=j);
console.log("8 !=10",i !=j);

//lgical operators
let p =5;
let q = 4;

let cond1 = p > q;
let cond2 = p === 7;

console.log("cond1 || cond2 = ",cond1 || cond2);

//conditional statement

let age = 25;
if(age  >= 18){
    console.log(" you can vote");

}
if(age <18){
    console.log("you cannot vote");
}

let mode = "dark-mode"
let color;
if(mode ==="dark-mode"){
    color = "black";
}
if(mode==="light"){
    color= "white";
}
console.log(mode);
console.log(color);


let num =2;
if(num % 2 ===0){
    console.log(num,"is even")
}
else{
    console.log("odd")
}

let o = 60;
if (o <12){
    console.log("junior")
}else if(age>12){
    console.log("senior")
}
else{
    console.log("non")
}

let m ="dark";
let l;
if(m==="dark"){
    l ="black"
}else if(m==="white"){
    l ="light"
}else if(m === "blue"){
    l ="blue"
}else{
    l = "nothing"
}
console.log(color);

//ternary operator(?:)

let g = 18;
let result = g>=18 ?"adult" : "not adult";
console.log(result);
//mdn docs :to explore more

alert("hello");//popup
let w =prompt("ankita!");//input bhi le skta hai
console.log(w);


let num = prompt("enter a number: ");
if(num % 5===0){
    console.log(num,"number is multiple of five")
}else{
    console.log(num,"not multiple of five")
}

let score = prompt("Enter a Score(0-100) : ")
let grade;
if(score >=90 && score <=100){
    grade ="A"
} else if(score >=75 && score <=80){
    grade= "B"
} else if(score >=60 && score <=75){
    grade= "C"
}else if(score >=35 && score <60){
    grade = "D"
}else{
    grade ="fail"
}
console.log("according to your score, your grade was : ",grade);
