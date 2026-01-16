
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
n{x}   => Number of | بتحدد كام رقم
n{x,y} => Range
n{x,}  => At Least x
*/

// let urls = "s22s s555s s66666s s8888888888s"; // http + https
// let re = /s\d{5,}s/g 
// let x = urls.match(re)
// console.log(x)






// function arrayDiff(a, b) {
//   if(b.length==0 || a.length==0)
//     return a;
//   for(let i =0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//       if(a[i]==b[j]){
//         a.splice(i,1);
//         i--;
//       }
//     }
//   }
//   return a;
// }



// function arrayDiff(a, b) {
// if(a.length === 0)
// {
//   return a
// }
//   const setA = new Set(a);
//   const setB = new Set(b);

//   return [
//     ...a.filter(x => !setB.has(x)),
//     ...b.filter(x => !setA.has(x))
//   ];
// }


// ------------------------------------------
/*
-1
0
3

4
16
25
26
*/

var isSquare = function(n){

    for(let i = 0; i <= n; i++)
    {
      k = i * i
      if(k === n)
      {
        return true
      }
    }

  return false; // fix me
}


let i = 3
let a = 3

let k = a * i

console.log(isSquare(24))
// console.log(k)

