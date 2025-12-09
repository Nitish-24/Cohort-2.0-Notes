var tag = document.querySelector('p');

// tag.innerHTML = "HII";
//1.  Write a function sayHello() that prints "Hello JavaScript"

// function sayHello(){
//     tag.innerHTML = "Hello javaScript"; || tag.textContent = "Hello JavaScript";
// }

// sayHello();


// 2.  Create a function add(a, b) that returns their sum and log the result.

//  function add(a,b){
//     var a = +prompt("Enter value of first number");
//     var b = +prompt("Enter value of second number");
//     return a+b;
// }
// tag.textContent = add();

// 3. Write a function with default parameter name = "Guest" that prints "Hi <name>"

// function defaultPractice(name="Guest") {
//     tag.textContent= `Hii ${name}`;
// }

// defaultPractice();
// defaultPractice("Nitish");

//4.  Use rest parameters to make a function that adds unlimited numbers.

// function add(...numbers) {
//     let sum =0 ;
//    numbers.forEach(element => {
//     sum +=element;
//    });
//    tag.textContent=sum;
// }
// add(10,20,30,40,59,23,242323,45);

// 5. Create an IIFE that prints "I run instantly!"

// (function(){
//     tag.textContent="I run instantly!"
// })();


// 6. Make a nested function where the inner function prints a variable from the outer function.

// function outer(){

//     let ne =19;
//     function inner(){
//          tag.textContent =ne;
//     }
//     inner();
// }
// outer();

// 7. Create an array of 5 fruits.

// let arr = ["apple","banaana","evec", "ccbc","bccb"];
// // arr.push("mango");   // end me add
// // arr.shift();   

// // 8.Use a for loop to print all elements of an array.

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);

// }

// 9. Create an object person with keys name, age, and city, and print each key’s value.

// let person = {
//     name: "Nitish",
//     age: 12,
//     city: "Baddi"

// }
// tag.textContent =`${person.name}, ${person.age},${person.city}`;

// 10. Use setTimeout() to log "Time’s up!" after 2 seconds.

// setTimeout(()=>{

//     tag.textContent ="2 seconds of delay"

// },2000);

// 🎉 LEVEL 1 (10/10 completed successfully)

// 1. Write runTwice(fn) which executes a function 2 times.

// function runTwice(fn){
// fn();
// fn();
// }

// function fu(){
//     tag.textContent ="Twice";
// }

// runTwice(fu);

// // 2. “Create one pure function and one impure function (using a global variable).”
// var global = 35;
// function pure(){
//    return "hii";

// }
// function impure() {
//     global +=30;
//     tag.textContent =`this is impure ${global} is not same`;
// }
// // pure();
// impure();

// 3. Write a function that uses object destructuring inside parameters to extract and print name and age.

// function printDetail({name,age}){
//     tag.textContent =`${name} ${age}`;
// }
// printDetail({name:"Nitish",age:23});

// 4.Demonstrate the difference between a normal function and an arrow function when used as object methods (the this issue).

// let user = {
//    name: "Nitish",
//    normalMethod() { console.log(this); },
//    arrowMethod: () => console.log(this)
// }
// user.normalMethod();
// user.arrowMethod();

// 5. Given an array of numbers, use map() to create a new array where each number is squared.

// let arr= [1,2,3,4,5,6,7];

// let newArr = arr.map( (element)=>{
//   return element*element;
// })

// console.log(newArr);

// 6. Use filter() to get only even numbers from an array.
// let arr= [1,2,3,4,5,6,7];
// let newArr = arr.filter(element => element%2===0);
// console.log(newArr);

// 7. Use reduce() to find the total salary from this array

// let arr =[1,3,4,56,7,7,8,9,7,6,54,43,3];

// let ans = arr.reduce((acc,ele)=>acc+ele ,0 );
// console.log(ans);

// 8.Create an array of names and use some() and every() to test a condition.

// let arr = ["Nitish", "Rai", "Gandu", "hai", "or","thoda", "sa","bhadwa","bhi"];

// let ans = arr.some((element)=> element.length >3);

// console.log(ans);

// let ans2 = arr.every((element)=> element.length >3);

// console.log(ans2);

// 9. Create a user object and test Object.freeze() and Object.seal() by adding/changing keys.

// let user = {
//     name:"Nitish",
//     age:12,
//     city:"Chandigarh",
//     facFood:"KFC"
// }

// // Object.freeze(user);
// Object.seal(user);
// user.facFood ="panner";
// console.log(user);

// 10. Create a nested object (user → address → city) and access the city name inside it.

// let user = {
//     name:"Nitish",
//     age:23,
//     address: {
//         city :"Chandigarh"
//     }
// }
// tag.textContent =user.address.city;
