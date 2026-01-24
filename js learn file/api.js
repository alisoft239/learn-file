/*
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API
  Github main api
  https://api.github.com/users/alisoft239
  Github Repos api
  https://api.github.com/users/elzerowebschool/repos
*/

// -------------------------Asynchronous vs Synchronous-----173----
/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");