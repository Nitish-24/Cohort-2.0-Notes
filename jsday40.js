// 3. Sum all numbers using rest parameter
// 4. Create a closure counter function
// 5. Write a function that returns another function
// 6. Use a function to log even numbers in array
// 7. Create a pure function to add tax
// 8. Use IIFE to show welcome message
// 9. Write a discount calculator (HOF style)
// 10. Make a toUpperCase transformer using HOF
let tag = document.querySelector('p');


// function addAll(...vals) {
//     let sum = 0;
//     for (let index = 0; index < vals.length; index++) {
//         const element = vals[index];
//         sum += element;

//     }
//     return sum;
// }


// var ans = addAll(2, 4, 5, 5, 6, 6, 7, 7, 78, 8, 9, 9, 9, 9, 6, 5, 4, 3, 3, 4);
// tag.textContent = ans;




// ================================\

// function outer() {
//     var counter = 0;
//     return function ans() {
//         counter++;
//         tag.textContent = counter;
//     }
// }

// let ansOuter = outer();

// ansOuter();
// ansOuter();
// ansOuter();


// =============================

// function hii(){


//     return ()=>{
//         tag.textContent="Chala ja bsdk";
//     }
// }

// let ans = hii();

// ans();


// ========================


// function printEven(...array) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (element % 2 === 0) {
//             console.log(element);
//         }

//     }
//     tag.textContent = "Done";
// }

// printEven(2,4,5,6,7,7,3,53,54,5,3,23,2,4,5,5,6,6);


// ======================

// let cons = 1000;

// function pure(val) {
//   return val + 100;
// }

// tag.textContent = pure(cons);


// ==============

// (function iff() {
//     tag.textContent="Hello Welcome "
// })();

// ================

// function discount(discountVal) {

//     return function discounted(amount) {
//         tag.textContent = amount - (amount * (discountVal/100));
//     }
    
// }

// var tenPer =  discount(10);

// tenPer(1000);


// ====================

// function toUpperCase() {

//     return function toUp(val) {
//        tag.textContent = val.toUpperCase();
//     }

// }