/* ex:1 
لو عندك إتنين اراي و عايز تعرف الفرق بين الارقام فيهم 
هتمسك الاراي الاولى و تشوف العنصر ده موجود ولا لا ، و هترجع العنصر اللي مش موجود
هتعمل كده في الاتنين
زي كده
a.filter(x => !b.includes(x))
ممكن تجرب دي 
a.filter(x => !setB.has(x))
includes = set.has = دول بيبحثوا في الاراي العنصر ده موجود فيها ولا لا

مثال:

let a = [1,2,5,4] 
let b = [1,2,4,7,9] 
function arrayDiff(a, b) {
if(a.length === 0){return a}
  const setA = new Set(a);
  const setB = new Set(b);
  return [...a.filter(x => !setB.has(x)), ...b.filter(x => !setA.has(x))];}
console.log(arrayDiff(a, b))
*/


/* ex: 2
لو عايز ترجع الجذر التربيعي لاي رقم 
Math.sqrt(number)

لو عايز بقا ترجع ترو ولا فولس لو هو له جزر تربيعي ولا لا
var isSquare = function(n) {
if (n < 0) return false;let root = Math.sqrt(n);return Number.isInteger(root);}
or
var isSquare = (n) => Math.sqrt(n) % === 0;
*/
