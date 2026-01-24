/*
  Modules
  - Import And Export
لازم تضيفها لما تستدعي الملف في html
  type="module"
*/
// File You will Export
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething };

// File You will Import

import { a, arr, saySomething as s } from "./main.js";

console.log(a);
console.log(arr);
console.log(s());

// ----------------Import All----------------168----
/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/



// File You will Export
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a as myNumber, arr, saySomething };

export default function () {
  return `Hello`;
}

// File You will Import

// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(elzero());

import * as all from "./main.js";

console.log(all);

console.log(all.myNumber);
console.log(all.arr);


