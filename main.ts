//strongly typed syntax step01
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;

// //type inference
// let e = "USA";
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;
// console.log(g)

//use const where variable values do not change step02
// const a = 5;
// const b : number = 33;
// const c ="best";

// //I suggest use let instead of var everywhere, 
// //becuase let has blocked scope
// if (true) {
// 	let z = 4;
// 	//use z
// }
// else {
// 	let z = "string";
// 	//use z
// }
// console.log("let: " + z);// Error: z is not defined in this scope


// // let age = 18;

// let a = 5;

// export default a;
// console.log(a)

import a from "./first.js";
import {b, c} from "./second.js";

console.log(a + b + c);

// export const b = 10;

// export const c = 2;
// console.log(b+c)

// let result = age ==18 ? "you are  allowed" : "you are not allowed";
// console.log(result);

// let firsName = "Hamza";
// let age = 23;

// console.log("Hello my name is " + firsName + " my age is " + age);

// let index = 10;
// let result = ++index + ++index + 2 + --index - 2;
// console.log(result);

// let num1: number = 20;
// num1 -= 22;
// console.log(num1);

//let x = 4;   (<,>,=,+,-,===,==,==,!=)
//let y = 3;
//console.log(x != y);                   /**(!= means  not equal to)**/


//let x = 61;
//let y =19;
//console.log(x <= y);


// let israining=true;
// if (israining) {
//     console.log("wear a raincoat .")
// } else {
//     console.log("wear sunglassis .");
// }

// let weather="normal";
// if (weather === "raining") {
//     console.log("wear raincoat.");
// }else if (weather==="cloudy"){
//     console.log("wear a light jacket")
// }else {
//     console.log("wear shirt");
// }

// let percentage = 30 ;
// if (percentage>= 90) {
//     console.log("a-one");
// }else {
//     console.log("passed");
// }

// let leed=true;
// let adobtor = true;
// let electricity = false;


// if(leed && adobtor && electricity) {
//     console.log("charger");
// }
// else{
//     console.log("not a charger");

// }
//  || OPERATOR anyone is true is working && anyone is false is working false

// let isbeautifull = false;
// let isrich = false;

// if(isbeautifull || isrich) {
//     console.log("can engaged");
// }
// else{
//     console.log("rejected");
// }



// let mypercentage = 101;

// if(mypercentage>=90 && mypercentage<=100) {
//     console.log("YOUR GRADE IS : A-one")
// }
// else if(mypercentage>=80 && mypercentage<=90){
//     console.log("YOUR GRADE IS : A+ GRADE");
// }
// else if(mypercentage>=70){
//     console.log("YOUR GRADE IS : A-GRADE");
// }
// else{
//     console.log(" YOUR GRADE IS :failed")
// }

// function greet () {
//     return "hello world";
// }

// let message = greet();
// console.log(message);
//  function sum() {
//     return 2+2
//  }
// let result = sum();
// console.log(result);
 
// // function subtract(){
// //     return 4-2
// // }
//  let value = subtract();
//  console.log(value);
// function sum(num1:number , num2:number) {
//     let answer = num1 + num2;
//     return answer
    
// }

// let result = sum(10 , 9);
// console.log(result);

// function greet(message:string) {
//     return message;
// }

// let result= greet("hello shiekh sahab!!");
// console.log(result);

// function greet(message = "helloworld"){
//     return message;
// }
// let result = greet();
// console.log(result);

// let greet = () => "hello world";
// let result = greet();
// console.log(result);

// let greet = () => {
//     return "hello world"
// };

// let result = greet()
// console.log(result);

// if(true){
//     let age = 29;
//     console.log(age);
// }



// var age = 25;
// console.log(age);  /*var variable mai hosting hogi or hosting mai var ka variable khud top pr chlyjayga


// let examsheet = {
//     name: "HUZZI",
//     rollnumber: 1234,
//     subject: "english"
// }
// console.log(examsheet.subject);


// let car = {
//     name: "ribbon",
//     model: 2015,
//     glassis: "tent"
// }
// console.log(car); 

// import inquirer from "inquirer"
 



// let answer = await inquirer.prompt(
//     [
//     {
//         name: "q1",
//         message: "what is your name",
//         type: "input"
//     },

//     {
//         name: "q2",
//         message: "what is your gender",
//         type: "list",
//         choices: ["male", "female"]
//     }
// ]

    

// )

// console.log(`hello ${answer.q1}and my name gender is ${answer.q1}`)


// enum color {
//     Red,        /**inum union ka alternate h */
//    /* Green,
//     Yellow

//}

/**let trafficLight: color = color.Red;       SWITCH STATEMETNT PRNI H
 1st method console.log(color.Green) 
   2nd method console.log(color["Red"]) 
     3rd method console.log(color[1])  
     "homework enum example with switch cases" and "while loop"  "unknown and any (data type) difference"
     enum login {

     }

     let trafficLight: color = color.Red;
     if(trafficLight == color.Red);
     console.log("stop")

     for (let i=10; i>0; i--) {
        console.log(i)
     }  
     

    let  fruit= ["apple" , "mango" , "banana" , "kiwi"]
    for (let i=0; i<= fruit.length; i++) {
        console.log(fruit[i]);
    } 

    
    

type user = {
    name: string;
    age: number;
    role: string;
     children: {
        name: string;
        age: number;
     }
};

let user1: user = {
    name: "SAAD",
    age: 23,
    role: "FATHER",
    children: {
        age: 2,
        name: "SAIM",

    }
}

console.log(user1.children.name)

type student = {
    name: string;
    rollnumber: number,

},
type teacher = {
    name: string;
    age: number,
}

console.log(student)


let age: unknown;
age = 17;
//(age as number).toFixed(2)  //METHOD 1
// let newAge = age as number  //method2
// (<number>age).toFixed(2) //METHOD 3
let new_age = (age as number).toFixed(2)

console.log(new_age) 

function sum(a:number , b:number):number {
    return a + b // function kch return nh kr rh hoga tu iski data tyoe "void " hogi
}
console.log(sum(10 , 20))

function sum(...rest:number[]){

    let total:number=0
     for(let i = 0; i<rest.length;i++){
        total+=rest[i]

     }
     console.log(total)
}

sum(10,20,30)

function sum(arg1:any , arg2:any ):any{
return arg1 + arg2
}
sum("2" , "4");
sum(1,1);

function sum(arg1:number , arg2:number):number
function sum(arg1:string ,arg2:string) :string
function sum(arg1:any , arg2:any):any {
    return arg1 + arg2
}

function sum(arg1:number , arg2:number):number
function sum(arg1:string ,arg2:string) :string


function sum(arg1:any , arg2:any ):any{
    return arg1 + arg2
}
console.log(sum("2" , "4"));
console.log(sum(1,1)); 

// function add(arg1:string,arg2:number)
// function add(arg1:boolean,arg2:object)
// function add(arg1:string,arg2:number)
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(4, 3));

let num1 = 18.6;
let num2 = num1.toFixed(2);
console.log(num2);


let num1 = "ali";
let num2 = num1.toUpperCase();
console.log(num2);

let a ="sherry"
a[0].toUpperCase() + a.slice(1)
let b = a.toLowerCase()
console.log(b)

let a: string|number;
a=10;
a="huzaifa";
console.log(a);

let a:string|number; //narrowing
a=10;
a="huzaifa";
console.log(a)

let num11 =true;
//             "boolean" == "boolean"
console.log(typeof num11 === "boolean")
// Math.random means create random value between 0.00 - 0.99
let random = Math.random() * 100;
console.log(random);

let random = Math.random();
let a = random > 0.6 ? "huzaifa" : 10; // its method like if else conditiion
console.log (a)
let random = Math.random();

let a = random>0.6 ? "huzaifa": 16 : random>0.8 ? "ali":39;

if (typeof a == "string"){
    console.log("Narrowing - string");
}else{
    console.log(a);
    
}


interface user { 
    name: string;
    age: number;
    address : {
        city: string;
        state: string
    }
}

let user1: user = {
    name: "huzaifa",
    age:23,
    address: {
        city: "karachi",
        state: "sindh"
    }
}

console.log(user1.address.state) 

 // structula typing given below
interface deal1{
    food: string
}

interface deal2 {
    food: string
    drink:string
}
let aliOrder: deal1={
    food:  "biryani"
};
let SAIM: deal2 = {
    food: "biryani",
    drink: "string", //if drink is optional so error nh ayga drink?
}

let aliorder:deal1 = SAIM //extra property are allowed but  missing property not allowed 
console.log(SAIM.drink)
console.log("first") /**asyncronus js */
/**setTimeout(() => {
    console.log("second")
}, 3000)
console.log("third")

type fn = ()=> void; /**function ki type bnany ka trika */

/*function orderpizza (preparePizza:fn){
    setTimeout(()=> {
        console.log("order places")
        preparePizza()
    },2000);
} 

function preparePizza() {
    setTimeout(()=> {
        console.log("prepared pizza")
    },5000)
}

orderpizza(preparePizza)**/

// function checkMarks(){
//     return new Promise( (resolve,reject) =>{
//         let marks = 89;
//         setTimeout(()=>{
//             if(marks>=91)
//                 {
//                   resolve("partyy")
//             } else {
//                 reject("fuck you")
//             }
//         },5000)
        
         
//     } )

//     checkMarks().then(()=>{console.log("partyy")})

// .catch((err)=>{
//     console.log(err);
// })
// }
// await checkMarks()**/

// console.log("first")
// setTimeout(() => {
//     console.log("second")
// }, 6000)
// console.log("third")

// const loginUser = (email:any,password:any , cb:any)=>{
//     setTimeout(()=>{
//         cb(em)
//     },4000)
// }
// loginUser("huzaifa@gmail" , 1234, (email)=>{
//     console.log(email)
// })
// let checkmyResult=(myMarks:number)=>{
//     const promise = new Promise((resolving,reject)=>{
//         if(myMarks>80) {
//             resolving("successfully")
//         }else{
//             reject("failed")
//         }
//     })
//     return(promise)
// }

// checkmyResult(91).then((message)=>{  //this parameter is the body of resolve
//     console.log(message)
//     return"fuck" //yha jb bh return mai kch likhonga tu ek or .then laga kr chalana hoga code 
// }).catch((err)=>{
// console.log(err)
// }).then((msg)=>{  //jysy yahan kra 
// console.log(msg)
// })

// let loginuserPromise=(email:string , password:number)=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         if("mhuzaiashiekh@gmail.com" && password===1234){
//             resolve(email)
//         }else{
//             reject("invalid email or password")
//         }
        
//        },2000)
//     })
// }
// let getvideosPromise=(email:any)=>{
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             if(email){
//                 resolve(["video1","video2","video3","video4"])
//             }else{
//                 reject("please enter your email")
//             }
            
//          },3000)
//     })
// }

// loginuserPromise("mhuzaifashiekh" , 1234)
// .then((email)=>{
//     console.log(email)
//     return getvideosPromise("")
// })
// .then((video1)=>{
//      console.log(video1)
// }).catch((err)=>{
// console.log(err)
// })

// let getuserDetail =async ()=>{
 
//     try{
//         let email =await loginuserPromise("mhuzaifashiekh@gmail.com" , 12345)
// console.log(email)
// let videos=await  getvideosPromise(email)
// console.log(videos)
//     }catch(err){
//         console.log(err)
//     }


// }
// getuserDetail()
// console.log("first")



//oop (object oriented programming)
// class House {
//     ownerName: string 
//     readonly address:string = "A234";
//     numberofdoors:number =3;
//     constructor(name:string , pata : string){
//        this.ownerName=name;  
//        this.address = pata;
//     }
//     bell(){
//        console.log("ding dong" , this.address )
//        this.address
//     }
// }


// // let h1 = new House("huzaifa" , "orangu"); 
// // let h2 = new House("hamzah" , "paris");
// // let h3 = new House("johny" , "heeramandi");
// // console.log(h3)
// let h1 = new House("sarim" , "orangi");
// let h2 = new House("saim" , "korangi");
// h2.bell()

// //h1.bell() //address dingdong
// //h2.bell() //address dingdong
// //prototypes 



// class Animal{
//     name:string;

//     constructor(anyName:string){
//         this.name=anyName;
//     }
//     eat(){
//         console.log("eaten")
//     }
// }

// class Cat extends Animal{
//     eyecolor:string;
//     constructor(name:string , color:string){
//         super(name) //In object-oriented programming, especially in TypeScript, 'super' is used to call functions on an object's parent class.
//         this.eyecolor=color
//     }
//     meow(){
//         console.log("meow mowa")
//     }
    
// }
// let c1 = new Cat("joy" , "blue");
// console.log(c1)
// c1.meow()

// assigment university management system



// class Person {
//     name:string;
//     age:number;
    
//     constructor(name:string , age:number) {
//         this.name=name;
//         this.age=age;

//     }
// }

// class Student extends Person{
//     rollNumber:string;
//     courses:Course[]=[];
//     constructor(name:string , age:number , rollNumber:string ){
//         super(name,age)
//         this.rollNumber=rollNumber
//     }
//     registorforcourses(courses:Course){
//         this.courses.push(courses);
//     }
// }

// class Instructor extends Person{
//     salary:number;
//     courses:Course[]=[];
//     constructor(salary:number , name:string , age:number){
//         super(name,age)
//         this.salary=salary;
//     }
//     assigncourse(courses:any){
//         this.courses.push(courses);
//     }
// }


// let student1 = new Student("huzaifa" , 22 ,"2334" )
// let student2 = new Student("Hamzah" , 25 , "3849")
// let Instructor1 = new Instructor(60000 , "sirZia" , 60)
// let Instructor2 = new Instructor(5000 , "missMehwisj" , 40)

// class Course{
//     id:number;
//     name:string;
//     student:Student[]=[]
//     Instructor:Instructor[]=[]
//     constructor(id:number ,name:string){
//         this.id=id;
//         this.name=name;
//     }
//     addStudent(std:Student){
//         this.student.push(std)
//     }
//     addInstructor(ins:Instructor){
//         this.Instructor.push(ins)
//     }
// }

// class Department{
//     name:string;
//     courses:Course[]=[];
//     constructor(name:string){
//         this.name=name
//     }
//     setCourse(course:Course){
//         this.courses.push(course)
//     }
// }


// let course1 =new Course(7 , "blockchange")
// let course2 =new Course(5 , "markiting")
// course1.addStudent(student1)
// course2.addStudent(student1)
// course2.addStudent(student2)

// course1.addInstructor(Instructor1)
// course2.addInstructor(Instructor2)


// console.log(course1.student)
// console.log(student1.courses)

// let Dept = new Department("markiting");
// Dept.setCourse(course1)
// console.log(Dept.courses[0])


// class Animal{
//       name:string;
//       constructor(name:string){
//         this.name=name;
//       }
//       makesound(){
//         console.log("tun tun")
//       }
// }
// let a1= new Animal("tiger")
// console.log(a1)

// class cat extends Animal{
//     makesound(){
//         console.log("yeaho")
//     }
// }
// class dog extends Animal{}
// let d1=new dog("tomy")
// d1.makesound();

//incapsulation
// class Parent{
//     parentname:string="huzaifa";
//     private secret:String ="xyz";
//     protected cardPincode:number=2345;
  

    
// }
// class Chilren extends Parent{
//      name:string;
//      constructor(name:string){
//         super()
//         this.name=name;
//      }

//      getInfo(){
//         this.
//      }
// }
// let c1 = new Chilren("ali")
// c1.

//abstraction
// interface Idraw{
//     draw:()=>void;
//     color:()=>void;
// }
// class circle implements Idraw{
//      draw() {
//         console.log("drawing")
//      }
//      color(){
//         console.log("")
//      }
// }
// class triangle implements Idraw{
//     draw(){
//         console.log("DRAWING TRIANGLE")
//     }
//     color(){
//         console.log("")
//      }
// }

//abstract classes and members  (assignment)
//statics member(assignment)