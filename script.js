
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
i => كابتل او اسمول
g => globel

(x|y) 
[0-9]
[^0-9]
[a-z]
[^a-z]
[A-Z]
[^A-Z]
[abc]
[^abc]
. => all character - Array
\w => words [a-z A-Z 0-9]
\W => not words
\d => digits
\D => not digits
\s => whitespace
\S => not whitespace
\b x => frist word
x \b => end word
n+ => one or more 
n* => zero or more
n? => zero or one last char

*/

let urls = "https://google.com http://www.website.net https web.com"; // http + https
let re = /(https?:\/\/\w+.)?\w+.(com|net)/g 
let x = urls.match(re)
console.log(x)
