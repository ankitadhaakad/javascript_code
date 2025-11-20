//let promise = new Promise((resolve,reject)=>{
  //  console.log("i am a promise")
   // resolve("success");
    //reject("some error")
//})


const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some error occurred");
  });
};

let promise = getPromise();

promise
  .then(() => {
    console.log("promise fulfilled");
  })
  .catch((error) => {
    console.log("promise rejected:", error);
  });


function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("soma data1");
            resolve("solve");
        },5000)
    });
}function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("soma data2");
            resolve("solve");
        },5000)
    });
}


console.log("fetching data1.....");
let p1 =asyncFunc1();
p1.then((res)=>{
    //console.log(res);
    console.log("fetching data2......");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        //console.log(res);
    });

});

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{  
        console.log("weather data");
        resolve(200);
    },2000);
});
}
async function getweatherData(){
     await api();//1st
     await api();//2nd
}





















































