let str = "apna Collage";
console.log(str[3]);


let obj ={
    item :"pen",
    price : 300
};
console.log(`the cost of ${obj.item} is ${obj.price} rupees`)
//tamplate literals
let sentance = `this is tamplate litreal ${1+2+3+4}`;
console.log( sentance);

//scape character \n : next line de dena ,\t :tab space
console.log("apna\ncollage")
console.log("ankita\tdhakad")

let str1 = "ankkita gopi "
let str2 = "dhakad"
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());
console.log(str1.slice(1,5))//eanding value not inclusive
console.log(str1.concat (str2))
console.log(str1 +str2);
console.log(str1.replace("k","i"));
console.log(str1.charAt(0));

//practice
let fullName =prompt("enter your full name without spaces");
let userName = "@" +fullName +fullName.length ;
console.log(userName)