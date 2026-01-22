
/*
- Array.from(iterable, mapfun, this)
- function af() {
   return Array.from(arguments); // بتخليك تضيف مدخلات كتير للدالة عادي 
  }
  af("Osama", "Ahmed", "sayed", 1, 2, 3)
- copyWirhin(target, start => optional , end => optional)
- Array.some(CallbackFunc(Element, Index, Array), This Argument)
- Array.every(CallbackFunc(Element, Index, Array), This Argument)
- Spread Operator => ...Iterable 
*/
/*

// => every think
i => كابتل او اسمول  ali=Ali 
g => globel    ex:all index ali on index 0 - Ali on index 4

(x|y) ex: (ali|ayman|mohammd)
[0-9] 
[^0-9] 
[a-z] 
[^a-z]
[A-Z]
[^A-Z]
[abc] 
[^abc]
. => all character => Array 
\w => words [a-z A-Z 0-9]
\W => not words
\d => digits
\D => not digits
\s => whitespace
\S => not whitespace
\b x => frist word
x \b => end word
n+ => one or more  \w+ a - al - ali 
n* => zero or more \w* "" - ali 
n? => zero or one last char   - https? https http 
n{x}   => Number of | بتحدد كام رقم 
n{x,y} => Range
n{x,}  => At Least x
- replace
- replaceAll
^n => عشان لو عايز تبدا بحاجه معينه
n$ => نهاية الفحص
*/


/*
  Regular Expression
  - Input Form Validation Practice
*/

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;


//   // let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
// const phoneRe = /^1[3-9]\d{9}$/;

//   let validationResult = phoneRe.test(phoneInput);
  
//   return validationResult;
// }



/*
  Regular Expression
  - Challenge
*/


// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://wwt.e-rw.elzero.org';
// let url5 = 'https://www.elzero.org:5000/';
// let url6 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';



// let re = /^(https?:\/\/)* ((([a-zA-Z0-9])(\.|-)+) *([a-zA-Z0-9]))+(:\d{2,5})*\/*.*$/g;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// console.log(url6.match(re));

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

// class User {
//   // Private Property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);
// -----------------------------------------------------------------------
// Edit The Class
// class User {
//   #c;
//   constructor(username, card) {
//     let rx = /\d{4}(?=\d)/g

//     this.u = username;
//     this.#c = Array.from(card + "").filter((e) => {
//   if(!isNaN(Number.parseInt(e))){return e}}).join().replaceAll(",","").replace(rx,"$&-");
  
// }
//   get showData(){
//     return `Hello Osama Your Credit Card Number Is ${this.#c}`
//   }
// }

// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined
// -----------------------------------------------------------------------

// Write Your Code Here
// String.prototype.addLove = function () {
//   return `I Love Elzero Web School`
// }

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School
// ------------------------------------------------------------------------

// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };

// // Write Your Code Here
// Object.defineProperties(myObj,{
// score: {
//   writable: false,
//   enumerable: true,
//   configurable: true,
//   value: 1000
//   },
// id: {
//   writable: true,
//   enumerable: false,
//   configurable: true,
//   value: 1000
//   }
// } 
  
// )

// delete myObj.country


// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
// --------------------------------------------
let wMapUser = { theName: "Elzero" };
let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; // Override The Reference

console.log(myWeakMap);
console.log(Array.from("12345", (n) => +n + +n));