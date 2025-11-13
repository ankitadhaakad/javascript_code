let hero =["batman","thor","hulk"];
hero[2] ="ironman";
console.log(hero)
console.log(hero.length)//property

console.log(typeof hero);//object
console.log(hero[2])

let num=[20,30,40,50,60,70,80, 90,100]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
//for of
for(let element of num){
    console.log(element)
}

let city =["delhi","indore","mumbai","pune"]
for(let cities of city){
    console.log(cities.toUpperCase());
}

//practice
let student=[85,97,44,67]
let sum =0;
for(let val of student ){
  sum +=val;
}
let avg = sum /student.length;
console.log(`avg marks of class = ${avg}`)

//practice 2
let item =[250,645,900,300,50]
let idx = 0;
for(let val of item){
    console.log(`value at index ${idx} = ${val}`)
    let offer =val/10;
    item[idx] = item[idx] - offer;
    console.log(` value after offer =${item[idx]}`)
   
    idx++;
}

//second
let items =[200,300,400,500]
for(let i =0;i< items.length; i++){
    let offer = items[i]/10;
    items[i]-=offer;
}
console.log(items);

let food =["potato","litchi","apple"];
food.push("mango","chips");//add item at end
console.log(food);
food.pop();//deleted end
console.log(food);
console.log(food.toString())


//concat
let marvel_heros=["thor","spiderman","ironman"];
marvel_heros.unshift("krish")//addto start
marvel_heros.shift();//delete from start & return
let heros_dc =["superman","batman"];

let heros =marvel_heros.concat(heros_dc);
console.log(heros);

let p =["a","b","c","d","e"]
console.log(p);
console.log(p.slice(1,3))//end index not include

//splice(add/remove/replace in original array)
let r =[1,2,3,4,5,6]
r.splice(2,2,101,102);
console.log(r);

//practice
let companies =["google","microsoft","ibm","bloomberg","netflix","uber"]
companies.shift();
companies.splice(2,1,"ola");
companies.push("purple")
console.log(companies)
