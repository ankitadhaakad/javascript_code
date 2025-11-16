//console.dir(window.document);
//console.log(document.body);
const head=document.getElementById("header");
console.log(head);
console.dir(head);

let heading=document.getElementsByClassName("header")
console.log(heading)


let parahs = document.getElementsByTagName("p");
console.log(parahs);
console.dir(parahs);

let firstelements = document.querySelector("p");//id,class,tag sb ek sath(esse matching 1st element de deta hai)
console.log(firstelements);//nodelist

let allEl = document.querySelectorAll(".header");//id k liye #
console.dir(allEl);
console.log(allEl);

let div =document.querySelector("div");//innertext me plain text aata h pr innerhtml me text ke sath html tag bhi aate hai
console.log(div);

let head1 =document.querySelector("h1");
console.log(head1)
//textcontent jo hiiden field bhi show kr deta hai!



let h3 = document.querySelector("h3");
console.dir(h3.innerText);
h3.innerText = h3.innerText + " from apna collage"