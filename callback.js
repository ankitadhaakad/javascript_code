setTimeout((hello)=>{
    console.log(hello)
},1000,"hii");



function sum (a,b){
    console.log(a+b);
}
function calc(a,b,sumCallback){
    sumCallback(a,b);
}
calc(11,11,sum)


//neasting 
let age = 19;
if(age>=18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }

}else{
    console.log("child");

}

function getData(dataid,getNextData){
    setTimeout(()=>{
    console.log("data",dataid);
    if(getNextData){
        getNextData();
    }

},2000);
}
//callback hell :pyramid form
getData(1,()=>{
    getData(2, ()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});



























