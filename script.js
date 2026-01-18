
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


let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://wwt.e-rw.elzero.org';
let url5 = 'https://www.elzero.org:5000/';
let url6 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';



let re = /^(https?:\/\/)* ((([a-zA-Z0-9])(\.|-)+) *([a-zA-Z0-9]))+(:\d{2,5})*\/*.*$/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));



