
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




// // #1
// let setOfNumbers = new Set().add(10)
// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers)
// console.log(Math.min(...setOfNumbers))
// // // Needed Output
// // Set(3) {10, 20, 2}
// // 2

// ------------------------------------------
// #2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set(myFriends.sort()))
// // Needed Output
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// -------------------------------------------
//  #3

// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// let infoKye = Object.keys(myInfo) // Array 
// let infovalues = Object.values(myInfo)
// let mapInfo = new Map()
// for (let i = 0; i < infoKye.length; i++)
// {
//   mapInfo.set(infoKye[i], infovalues[i])
// }

// // let mapInfo = new Map(Object.entries(myInfo));  Best - return Array

// console.log(mapInfo)
// console.log(mapInfo.size)
// console.log(mapInfo.has("role"))
// // Needed Output
// // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// // 3
// // true

// -------------------------------------------



let theNumber = 100020003000;
 //1023
console.log([...new Set([theNumber + ""])].sort().join("").slice(1)) 

console.log([1,0,2,3].sort().slice(1).join(""))
// // Needed Output
// 123
