//prototype : is an entity having state and behaviour(object) .it is an refrence to an object special type of object
//1
const student ={
    name : "ankita",
    marks : 94.5,
    printarks : function(){
        console.log("marks: ",this.marks)
    },
};
console.log(student);


//2
const employee = {
    caltax(){
        console.log("tax rate is 10%")
    }
};
console.log(employee);
const KaranArjun ={
    salary : 50000,
    caltax(){
        console.log("tax rate is 20%")
    }
}
KaranArjun.__proto__=employee;
console.log(KaranArjun);



//classes
//constructor : automatically invoked by new , intilizes object
class ToyotaCar {
    constructor(brand,milage){
        console.log("creating new object");
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("start")
    }
    stop(){
    console.log("stop")
}
//setBrand(brand){
 //   this.brandName = brand;
//}
}
let fortuner = new ToyotaCar("fortuner",10);//constructor
//fortuner.setBrand("fortuner");
console.log(fortuner);
let lexus = new ToyotaCar("lexus",20);
console.log(lexus);

//inheritance
class Person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
}
class Engineer extends Person{
    Work(){
        console.log("work something")
    }
}
class Doctor extends Person{
    Work(){
        console.log("treat patients")
    }
}
let Ankita = new Engineer();
let Gops = new Doctor();
Ankita.eat();
Gops.eat();
Ankita.sleep();
Ankita.Work();

//super keyword: is used to call constructor of its parent class to access the parent's properties and methods.
class Real{
    constructor(){
          console.log("enter parent constructor");
        this.species = "homo sepiens"
    }
    eat(){
        console.log("eat")
    }
}
class Eng extends Real{
    constructor(branch){
        console.log("enter child constructor");
        super();//to invoke parent class constructor
        this.branch =branch;
          console.log("exit child constructor");
    }
    work(){
        console.log("work something")
    }
    
}
let engObj = new Eng("chemical eng");

//practice1

let DATA = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }
    viewData(){
        console.log("data= ",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);

    }
    editData(){
        DATA ="some new data";
    }
}


let student1 = new User("ankita","ankita@gmail.com");
let student2 = new User("wliam","wili@gmail.com");

let teacher1 =new User("dean","dean@gmail.com");
let teacher2 =new User("hod","hod@gmail.com");

let admin1 = new Admin("admin","admin@gmail.com");

//error handling

let a = 5;
let b =10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c);
}catch(err){
    console.log("err");
}
console.log("a = ",a);
console.log("a = ",a);
console.log("a = ",a);

   

















































































