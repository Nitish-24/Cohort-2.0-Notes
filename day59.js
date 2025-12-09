// class Student {
//     constructor(name, age,city) {
//         this.name = name;
//         this.age= age;
//         this.city= city ;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(val){
//       this._name = val;
//     }

//     printDetail() {
//         console.log(`Hii my name is ${this.name} and age is ${this.age} and city is ${this.city}  ye student hai `);
//     }
//     lateWork(){
//         setTimeout(function(){
//           console.log("Async js practice start");
//         },3000);
//     }
// }
// const s1 = new Student("Nitish",22,"Chandigarh");
// // s1.printDetail();
// // s1.name= "Annie";
// // s1.printDetail();

// class first extends Student{

//     constructor(name, age, city, batch){
//        super(name, age, city); 
//        this.batch = batch;
//     }
//      printDetailStudent() {
//         console.log(`Hii my name is ${this.name} and age is ${this.age} and city is ${this.city} ye first hai ${this.batch} `);
//     }
// }

// let f1 = new first("Muskan",23,"sikkim",2025);
// // f1.printDetail();
// // f1.printDetailStudent();
// f1.lateWork();



// function afterDelay(time , cb){

//     setTimeout(function(){
//       cb();
//     },time);

// }
//  afterDelay(3000,function(){
//     console.log("Callback executed")
// })

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice


// function getUser(Username, cb) {

//     setTimeout(function () {
//         console.log("Sent object");
//         cb(obj = {id: 23221, username: Username });
//     }, 1000)
// }

// function getUserPost(userId, cb) {
//     setTimeout(function () {
//         console.log("Sent array of posts of" + userId);
//         cb(ary = ["Hii", "Nitish", "How", "are"]);
//     }, 1000)
// }

// getUser("N_itish", function (data) {
//     getUserPost(data.id, function (postData) {
//         console.log(`Username is ${data.username}, userid is ${data.id} and post are ${postData}`);
//     })
// });

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai



// function loginUser(name, cb) {
//     console.log(name + " is login user");
//     setTimeout(() => {
//         cb(obj = { id: 123, Username: name });
//     }, 2000);
// }
// function fetchPermissions(id, cb) {
//     console.log("Fetching permissions for " + id);
//     setTimeout(() => {
//         cb(ary = ["Read", "Write", "Update"]);
//     }, 2000);
// }
// function loadDashboard(permissions, cb) {
//     console.log("loading dashboard");
//     setTimeout(() => {
//         cb();
//     }, 2000)
// }

// loginUser("Nitish", function (data) {
//     fetchPermissions(data.id, function (permissions) {
//         loadDashboard(permissions, function () {
//             console.log("dashboard loaded");
//         })
//     })
// })

function loginUser(name, cb) {
  console.log(name + " is logging in");
  setTimeout(function () {
    const user = { id: 123, username: name }; // no global, consistent key
    cb(user);
  }, 1000); // 1 second as per exercise
}

function fetchPermissions(userId, cb) {
  console.log("Fetching permissions for userId:", userId);
  setTimeout(function () {
    const permissions = ["Read", "Write", "Update"];
    cb(permissions);
  }, 1000);
}

function loadDashboard(permissions, cb) {
  console.log("Loading dashboard with permissions:", permissions);
  setTimeout(function () {
    cb("Dashboard loaded");
  }, 1000);
}

// flow: login -> fetchPermissions -> loadDashboard
loginUser("Nitish", function (user) {
  console.log("User received:", user);

  fetchPermissions(user.id, function (permissions) {
    console.log("Permissions received:", permissions);

    loadDashboard(permissions, function (message) {
      console.log(message); // "Dashboard loaded"
    });
  });
});
