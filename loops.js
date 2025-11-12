//loops : execude a piece of code again &again
//for loop
for(let i =1; i<=5; i++){
    console.log("apna collage")
}

//to calculate sum of 1 to n 
let sum = 0;
let n  = 10;
for(let i=1; i<=n;i++){
    sum = sum + i;
}
console.log("sum : ",sum);


//while loop
let i =1;
while(i<=5){
    console.log("i = ",i);
    i++
}

//do-while loop
let j =20;
do {
    console.log("ankita");
    j++;
}while(j<=10)

    //for-off loop : string or arrays pr 
  let str ="ankita atoliya"
  let size = 0;
  for(let i of str){
    console.log("i= ",i);
    size++;
  }  
  console.log("string size : ",size)

  //for in loop : object(keys value)
  let student ={
    name :"ankita",
    age :23,
    isPass : true
  };
  for(let keys in student){
    console.log("keys = ",keys , "value=",student[keys]);
  }


  //practice 1
  for(let i=0;i<=100;i++){
    if(i %2 !==0){
    console.log("i = ",i)
  }
}

//practice 2
let gameNumber = 25;
let userNum= prompt("guess the game number: ")
while(userNum != gameNumber){
   userNum= prompt("You entered wrong number . Guess again : ")

}

  console.log("congratulation, you guess correct number")