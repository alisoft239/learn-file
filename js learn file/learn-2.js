

// جلب عنصر من css
document.querySelector("h2").style.color = "#000";
// جلب عنصر
document.getElementById(ali).style.color = "#777";
document.getElementsByClassName(ali).style.color = "#777";
// تكرار عنصر
let testnoon45 = `
  <div>ali</div>
`;
    document.write(testnoon45.repeat(8));

// تنسيق ال console
console.log(  // %c نضعها قبل الكلام اللي عايز تنسقه
"%cElzero %cWeb %cSchool",
"color:red; font-size: 40px",
"color:green; font-weight:bold; font-size: 40px",
"color:white; font-size: 40px; background-color:blue"
);
// عمل جروب
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

/*  #10
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log( { name: "Osama", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

//   #11 crate variabuls 
var userName = "Ali Ayman";

//   #13 الفرق بينهم
/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/
let user = "Ali" , age = 23, country = "Egypt";  // يمكن تعريف أكثر من متغير في سطر واحد
const userN = 'ali';  // لا يمكن تغيير قيمته
// userN = 'Ayman'; // error

//  #14 String syntax And character
console.log("Hello \"Ali\"") // skip character
console.log("Hello\
  Ali\
  Ayman") // skip line
console.log("Hello\nAli Ayman") // سطر جديد

//  #15 String Concatenation
console.log(userName + " " + userEmail);

//  #16 Template Literals
let ali = "Ali Ayman "; 
document.write(`${ali} This is a paragraph`); // backtick ` ` not ' ' or " "  es6

//    #18 العمليات الحسابية
console.log(10 + 10);
console.log(10 + "10");
console.log(10 - 10);
console.log(10 - "10");
console.log(10 - "Ali"); // NaN Not a Numper
console.log(10 * 20);
console.log(10 * -20);
console.log(20 / 5);
console.log(20 / 3);
console.log(10 % 2);
console.log(10 % 3);
console.log(2 ** 4);

let a = 2;
console.log(++a); // pre increment يزود ثم يطبع
console.log(a++); // post increment يطبع ثم يزود
console.log(--a); // pre decrement ينقص ثم يطبع
console.log(a--); // post decrement يطبع ثم ينقص
//    #19  Unare plus بترجع الحالة لرقم
console.log(+"100" + 10);
console.log(+"100" - 10);
console.log(+"100" - 10);
console.log(Number("100")); 

//    #21  Assignment Operators

let Assignment_1 = 5;

Assignment_1 += 14; // بنزود على نفس المتغير
Assignment_1 *= 5;
Assignment_1 /= 2;
Assignment_1 -= 1;


//    #23  Double precision
console.log(1000000);
console.log(1_000_000); // Syntactiic Sugar
console.log(1e6); 
console.log(10 ** 6);
console.log(1000000.000); 
console.log(1000000.000);

console.log(Number.MAX_SAFE_INTEGER) // أكبر رقم أمن بدون اخطاء حسابية
console.log(Number.MAX_VALUE) // أعلى رقم في اللغة

//    #24  Number Methode

console.log(100..toString()) // بترجع رقم استرينج
console.log(1000.33333.toFixed(1)) // بتتحكم في الارقام اللي بتظهر
console.log(parseInt("100 Ali")) // بتحلل النص و ترجع منه الارقام
console.log(parseInt("Ali 100 Ali")) // مش ذكية اوي عشان تفهم الحركة دي
console.log(parseFloat("100.22 Ali")) // بترجع رقم كسري
console.log(Number.isInteger(100)) // بتعرفك لو هو رقم صحيح بترجع true
console.log(Number.isNaN("Ali" / 2)) // بتشيك لو البيانات الراجعه فعلا مش ارقام

//    #25  Math objevt

// بيقرب على اساس الرقم 
console.log(Math.round(99.2))  // لو هو أقل من النص بيجيب اقل رقم 
console.log(Math.round(99.5))  // لو هو النص او أزيد بيضيف واحد و يرجع الرقم

console.log(Math.ceil(99.2)) // بترجع اعلى رقم حتى لو الكسور تحت
console.log(Math.floor(99.9)) // بترجع أقل رقم حتى لو الكسور فوق

console.log(Math.min(99.9, 455, 45, -777, 76)) // بترجع اصغر رقم في المجموعه
console.log(Math.max(99.9, 455, 45, -777, 76)) // بترجع اكبر رقم في المجموعه

console.log(Math.pow(2, 4)) // الاس

console.log(Math.random()) // رقم عشوائي

// قطع
console.log(Math.trunc(99.4)) // بتعمل قطع للرقم و بترجعه صحيح


//    #26   String Methods

/*
  
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  "; 

console.log(theName);
console.log(theName[1]); // بترجع الحرف اللي في المكان ده
console.log(theName[5]); // بترجع undefined لو المكان مش موجود

console.log(theName.charAt(1)); // نفس اللي فوق
console.log(theName.charAt(5)); // مش بترجع حاجة لو المكان مش موجود

console.log(theName.length); // بترجع الطول
console.log(theName.trim()); // بتشيل المسافات اللي في الاول و الاخر

console.log(theName.toUpperCase()); // بتحول كل الحروف لكابيتال
console.log(theName.toLowerCase()); // بتحول كل الحروف لصغير

console.log(theName.trim().charAt(2).toUpperCase()); // تشيل مسافات و تجيب الحرف اللي في المكان ده و تحوله لكابيتال

/*  #28  String Methods
    
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

 a = "Elzero Web School";

console.log(a.indexOf("Web"));  // يارجع مكان اول حرف في الكلمة دي
console.log(a.indexOf("Web", 8)); // يبدأ البحث من المكان ده
console.log(a.indexOf("o")); // 5 
console.log(a.indexOf("o", 5)); // 5 عشان يبدأ البحث من المكان ده
console.log(a.lastIndexOf("o")); // 15 يجيب مكان اخر حرف في الكلمة دي
console.log(a.lastIndexOf("o", 10)); // 9 يبدأ البحث من المكان ده و يرجع اخر مكان

console.log(a.slice(2, 6)); // يقطع من 2 لـ 6
console.log(a.slice(-5, -3)); // يقطع من 5 من الاخر لـ 3 من الاخر
console.log(a.slice(2)); // يقطع من 2 لحد الاخر
console.log(a.slice(-5)); // يقطع من 5 من الاخر لحد الاخر

console.log(a.repeat(5)); // يكرر الكلام ده 5 مرات

console.log(a.split("", 6)); // يقسم الكلام ده في مصفوفة كل كلمة في خانة لو حطيت "" كل حرف في خانة
console.log(a.split(" ", 2)); // يقسم الكلام ده في مصفوفة كل كلمة في خانة لو حطيت " " كل كلمة في خانة

/*   #29  String Methods
    
  - substring(Start [Mand], End [Opt] Not Including End) 
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

 a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2, 6)); // يقطع من 2 لـ 6
console.log(a.substring(6, 2)); // 2 - 6
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3)); // 5 - 3

console.log(a.substr(0, 6)); // يقطع من 0 لـ 6
console.log(a.substr(17)); // يقطع من 17 لحد الاخر
console.log(a.substr(-3)); // يقطع من 3 من الاخر لحد الاخر
console.log(a.substr(-5, 2)); // يقطع من 5 من الاخر لـ 2 من الاخر

console.log(a.includes("Web")); //  يتحقق إذا كانت الكلمة موجودة
console.log(a.includes("Web", 8)); // يبدأ البحث من المكان ده

console.log(a.startsWith("E")); // يتحقق إذا كانت الكلمة تبدأ بـ
console.log(a.startsWith("E", 2)); // يبدأ البحث من المكان ده
console.log(a.startsWith("zero", 2)); // يبدأ البحث من المكان ده

console.log(a.endsWith("l")); // يتحقق إذا كانت الكلمة تنتهي بـ


/*   #31   Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");


/*    #32

  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

//   #33
/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

//   #34 
/*
  Nested If
*/

 price = 100;
 discount = false;
 discountAmount = 30;
 country = "Egypt";
let student = true;

if (discount === true) {

  price -= discountAmount;

} else if (country === "Egypt") {

  if (student === true) {

    price -= discountAmount + 30;

  } else {

    price -= discountAmount + 10;

  }

} else {

  price -= 10;

}

console.log(price);


//   #35
/*
  Conditional (Ternary) Operator
*/

theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");


//     #36
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

 price = 0;

console.log(`The Price Is ${price || 200}`);  // بترجع ال200 لوبترجع اي فولسي فاليو
console.log(`The Price Is ${price ?? 200}`);  //  بترجع ال200 لو ال price كانت null او undefined فقط




