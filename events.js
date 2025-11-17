/*btn1 = document.querySelector("#btn1");
/*btn1.onclick =(e)=>{//event object
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log("button was clicked");
    let a =11;
    a++;
    console.log(a);
}
btn1.addEventListener("click",(e)=>{//removeEventListener
    console.log("button was clicked");
    console.log(e);
});
btn1.removeEventListener("click",()=>{
    console.log("button was clicked- handler2");
});*/

//practice1
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";//dark
modeBtn.addEventListener("click",() =>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
         body.classList.add("light");
         body.classList.remove("dark");
    }
    console.log(currMode);//toggle mode
});

