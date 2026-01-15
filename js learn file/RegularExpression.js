/*
  Regular Expression
  فايدته انه بيبحث على حسب المدخلات 
  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive عشان متفرقش بين مابتل و اسمول
  g => global بيجيب النتايج كلها
  m => Multilines 

  Search Methods
  - match(Pattern) 

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig; 

console.log(myString.match(regex));

// #--------------------------------------136------------
/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;  // هات اي نتيجه من دول
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g; // هات نتيجه بين الرنج ده
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g; // اي حاجه غير الرنج ده
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g; // اي حاجه غير الرنج ده
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g; // تسلسل معين 
console.log(practice.match(practiceRe));


// #--------------------------------------137------------

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(atozSmall));
console.log(myString.match(NotAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(NotAtozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(NotaAndcAnde));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specials));


