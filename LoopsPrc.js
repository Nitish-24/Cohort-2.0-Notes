// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = +prompt("Enter your age:");

// if (age >= 18) {
//     console.log("Eligible");
// } else if (age < 0) {
//     console.log("Enter a valid age");
// } else {
//     console.log("Not eligible");
// }

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// let num = Number(prompt("Enter a number"));
// console.log("Here is your multiplication table of" + num);
// for(let i=1; i <=10 ;i++){
// console.log(`${num} * ${i} = ${num*i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let CountNumGtr =0;
// for(let i =1 ; i<=15;i++){
//     if(i>8)CountNumGtr++
// }
// console.log(CountNumGtr);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let correctPassword = "HIIBABY";

// let pass = prompt("Enter your password");

// if (pass===correctPassword) {
//     console.log("Correct Password ");
// }else{
//      console.log("Invalid Password ");
// }

// Level -2 Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let correctPassword = "HIIBABY";
// let attemptsleft = 3;
// let pass = prompt("Enter your password");
// attemptsleft--;
// while (pass !== correctPassword && attemptsleft > 0) {
//     attemptsleft--;
//     pass = prompt("Enter your password");
// }
// if (pass === correctPassword) {
//     console.log("Correct Password");
// } else {
//     console.log("Account Locked ");
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes

// let YesCount =0;

// let word = prompt("Enter a word:");
// while (word!=="stop") {
//     if (word==="yes") {
//         YesCount++;
//     }
//     word = prompt("Enter a word:");
// }
// console.log("Number of yes were: "+ YesCount);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// console.log("Numbers divisible by 7 between 1 to 50 are:");

// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let oddCount = 0;

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         oddCount += i;
//     }
// }
// console.log(oddCount);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = prompt("Enter the number:");

// while (num%2!==0) {
//     console.log(`Number entered is ${num}`);
//     num = prompt("Enter the number:");
// }
// console.log(`Number entered is ${num} and this is and even number`);

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = +prompt("Enter start");
// let end = +prompt("Enter end");

// if (end<=start) {
//     console.log("Dhang se likh le bsdk");
// } else {
//     for(let i= start; i<=end ;i++){
//     console.log(i);
// }
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// oddCount =3;

// for(let i =1 ; i<=20 ;i++){

//     if (oddCount<0) {
//         break;
//     }
//     if(i%2!=0 && oddCount>0){
//         oddCount--;
//         console.log(i);
//     }

// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let positive = 0;
// let negative = 0;
// let zero = 0;

// for (let i = 1; i <= 5; i++) {
//     let num = +prompt("Enter number");
//     if (num === 0) {
//         zero++;
//     }
//     else if (num > 0) {
//         positive++;
//     } else {
//         negative++;
//     }
// }
// console.log(`postive are ${positive} negative are ${negative} zero are ${zero}`);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
let attempt = 3;

while (balance > 0 && attempt > 0) {
  let amount = +prompt("Enter amount you want to deduct");

  if (balance >= amount) {
    balance -= amount;
    console.log(`Deducted ${amount} balance left is ${balance}`);
  } else {
    console.log(`Insufficient balance your balance is ${balance}`);

  }

  attempt--;
}
