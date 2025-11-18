console.log("Hii we will began our journey from here ok.");

//========================== var let const hoisting TDZ

// var a= 12;
// console.log(a);
// let b = 16 ;
// console.log(b);
// const d = 34;
// console.log(d);

// ========

// console.log(a);
// var a= 12;
// console.log(b);
// let b = 16 ;
// console.log(d);
// const d = 34;

// ==========================log

// console.log("Hello, Nitish!");
// console.log(10 + 5);

// alert("Are you sure ");

// let nam = prompt("Enter your name");
// alert("Hello "+ nam);

// let ans = confirm("Are you sure you want to delete this?");
// console.log(ans);

// Welcome message
// alert("👋 Welcome to our small JS demo!");

// // Taking user input
// let name = prompt("What is your name?");
// console.log("User entered name:", name);

// // Confirming if user wants to continue
// let confirmStart = confirm("Do you want to start, " + name + "?");

// if (confirmStart) {
//   alert("Great! Let's begin, " + name + " 😄");
//   let age = prompt("How old are you?");
//   console.log( name+ "'s age is:", age);

//   alert("Thanks, " + name + "! You are " + age + " years old.");
// } else {
//   alert("No problem, " + name + "! Maybe next time 😊");
// }

// console.log("Program ended.");


// ========================================================warn log info error

// console.warn("This is a warning message!");
// console.info("This is a info");
// console.log("this is log");
// console.error("Something went wrong!");

// ================================================================ string and split
// let str = "Nitish Rai From Sheriyans";
// let words = str.split(" ");   // space pe split
// console.log(words);

// let text = "JavaScript is awesome";
// console.log(text.includes("Script"));  // true
// console.log(text.includes("Java"));    // true
// console.log(text.includes("python"));  // false


// let user = "Nitish";
// let age = 22;
// console.log(`your name is ${user} and age is ${age}` );

// let text = "I love Java. Java is fun!";
// console.log(text.replace("Java", "JS"));
// // Output: I love JS. Java is fun!

// console.log(text.replaceAll("Java", "JS"));
// // Output: I love JS. JS is fun!

// let str = "Coding";
// let part = str.slice(0, 3);
// console.log(part); // "Cod"
// console.log(str);  // "Coding" (original change nahi hota)


// ======================================= console table group group end

// let users = [
//   { name: "Nitish", age: 22 },
//   { name: "Aman", age: 25 },
//   { name: "Ravi", age: 20 }
// ];

// console.table(users);

// console.log("Start");

// console.group("User Info");
// console.log("Name: Nitish");
// console.log("Age: 22");
// console.group("Address");
// console.log("City: Buxar");
// console.log("State: Bihar");
// console.groupEnd(); // End Address
// console.groupEnd(); // End User Info

// console.log("End");


// console.log("🚀 App Started");

// // Normal info
// console.info("Fetching user data...");

// // Grouping related logs
// console.group("User Info");
// const users = [
//   { name: "Nitish", age: 22, city: "Buxar" },
//   { name: "Aman", age: 25, city: "Patna" },
//   { name: "Ravi", age: 20, city: "Delhi" }
// ];
// console.table(users);

// console.log("Total users:", users.length);
// console.groupEnd(); // close User Info group

// // Warning & error messages
// console.warn("⚠️ Low memory detected!");
// console.error("❌ Failed to load profile image!");

// End message
// console.log("✅ App finished running!");

// console.time("loopTime"); // Timer start

// let sum = 0;
// for (let i = 0; i < 1000000; i++) {
//   sum += i;
// }

// console.timeEnd("loopTime"); // Timer end
// console.log(sum);

// console.log("Starting app...");
// console.warn("Warning message!");
// console.error("Error message!");

// console.clear(); // sab clear ho gaya
// console.log("Console cleared!");

// console.log("Hii")
// console.log("Hii")
// console.log("Hii")

// console.log(typeof 42);          // "number"
// console.log(typeof "Hello");     // "string"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"
// console.log(typeof null);        // ❗ "object" (JS ka bug hai)
// console.log(typeof [1, 2, 3]);   // "object"
// console.log(typeof {a:1});       // "object"
// console.log(typeof function(){}); // "function"


//<html>
//<head>
//<script src="app.js" defer></script>
//  </head>
//  <body>
//  <h1>Hello World</h1>
// </body>
//</html>

// =========================================================Assignment 29 

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// ==========================

// let num = 0;
// let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// console.log(result);

// =================================================================DAY 30 

// let arr = [1, 2, 3];
// console.log(arr instanceof Array);   // ✅ true
// console.log(arr instanceof Object);  // ✅ true
// console.log(arr instanceof String);  // ❌ false

// ==================================nullising 
// let age;
// console.log(age ?? "Not given"); // ✅ Not given

// age = 25;
// console.log(age ?? "Not given"); // ✅ 25

// ============================================

// let user = {
//   name: "Nitish",
//   address: {
//     city: "Buxar",
//     pin: 802130
//   }
// };

// console.log(user.address?.city);   // ✅ "Buxar"
// console.log(user.profile?.age);    // ✅ undefined (no error)


