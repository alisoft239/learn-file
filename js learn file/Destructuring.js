
//  - Destructuring Array ------------------------------115-----------------------------
// Destructuring معناها "تفكيك" أو "استخراج" القيم من المصفوفة بطريقة سهلة وسريعة!
let colors = ["أحمر", "أخضر", "أزرق"];

let [color1, color2, color3] = colors;

console.log(color1);  // أحمر
console.log(color2);  // أخضر
console.log(color3);  // أزرق

// تخطي بعض القيم
let numbers = [1, 2, 3, 4, 5];

let [first, , third] = numbers;  // لاحظ الفراغ!

console.log(first);   // 1
console.log(third);   // 3
// رقم 2 اتخطى!

// استخدام القيمة الافتراضية
let fruits = ["تفاح"];

let [fruit1, fruit2 = "موز"] = fruits;

console.log(fruit1);  // تفاح
console.log(fruit2);  // موز (القيمة الافتراضية)




//  - Destructuring  ------------------------------116-----------------------------
/*
  Destructuring
  - Destructuring Array Advanced Examples
*/
// بناخد المصفوفة بعدين نحذف اللي انت مش عايزه
let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal


//  - Destructuring  ------------------------------117-----------------------------
/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";


// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];  // يدلعك يا زيرو

console.log(book);
console.log(video);


//  - Destructuring Object ------------------------------118-----------------------------

let user = {
    theName: "Osama",
    theAge: 36,
    theTitle: "Developer",
    "theCountry": "Egypt",
}


// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theName, theAge, theCountry } = user;  // نفس الاسم من الاوبجكت وتخطي القيم اللي مش عايزها

console.log(theName);
console.log(theAge);
console.log(theCountry);

document.body.innerHTML = `Hello ${theName}, Your Age Is ${theAge}, You Live In ${theCountry}`;


//  - Destructuring Object ------------------------------119-----------------------------

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
    html: 70,
    css: 80,
},
};

const { // اعادة التسمية للمتغيرات
    theName: n,
    theAge: ag,
    theCountryy,
    theColor: co = "Red",  // اضافة خاصية جديدة بقيمة افتراضية
    skills: { html: h, css }, // تفكيك الاوبجكت الداخلي
} = user;

console.log(n);
console.log(g);
console.log(theCountryy);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user.skills; // تفكيك الاوبجكت الداخلي بس

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);


//  - Destructuring Function ------------------------------120-----------------------------
/*
  Destructuring
  - Destructuring Function Parameters
*/

 user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }
    function showDetails({theName: n, theAge: a, skills: {css: c}} = user) {
      console.log(`Your Name Is ${n}`);
      console.log(`Your Age Is ${a}`);
      console.log(`Your CSS Skill Progress Is ${c}`);
    }


//  - Destructuring Mixed ------------------------------121-----------------------------
/*
  Destructuring
  - Destructuring Mixed Content
*/

user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: nn,
  theAge: aa,
  skills: [, , three],
  addresses: { egypt: e },
} = user;

console.log(`Your Name Is: ${nn}`);
console.log(`Your Age Is: ${aa}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e}`);
