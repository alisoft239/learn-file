/*  123
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([, 11, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

// #--------------------------------------------124--------------------------------
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/*
Set vs WeakSet (باختصار)
- Set

يخزن: أي نوع بيانات

يمنع التكرار

له حجم: set.size

قابل للتكرار (Loop)

يحتفظ بالقيم في الذاكرة

- WeakSet

يخزن: Objects فقط

يمنع التكرار

ملوش size

لا يمكن عمل Loop عليه

القيم تُحذف تلقائيًا من الذاكرة (Garbage Collection)
*/ 

// #--------------------------------------------125--------------------------------

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null); // Object With No Prototype
let myMap = new Map(); 

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",   // بيعمل ابديت للكي اللي قبله
};

console.log(myNewObject[10]);

let myNewMap = new Map();  
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

/*
Map vs Object (باختصار) :

(1) Object

المفاتيح: String / Symbol فقط

الاستخدام: بيانات بسيطة (JSON)

الحجم: Object.keys(obj).length

الأداء: أضعف في الإضافة والحذف

الترتيب: غير مضمون دائمًا

Map

المفاتيح: أي نوع (Object, Function, Number…)

الاستخدام: بيانات معقدة

الحجم: map.size

الأداء: أسرع في الإضافة والحذف

الترتيب: محفوظ حسب الإدخال

*/

// #--------------------------------------------126--------------------------------

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap = new Map([  // Iterable Of Arrays
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap); 

console.log(myMap.get(10)); // Get Value By Key
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has("Name")); // check Key Available Or Not

console.log("####");

console.log(myMap.size);

console.log(myMap.delete("Name"));

console.log(myMap.size);  // Size map

myMap.clear(); // Empty The Map

console.log(myMap.size);



// #--------------------------------------------127--------------------------------

/*
Map vs WeakMap (مختصر جدًا)
Map

المفاتيح: أي نوع

له size

ينفع تعمل Loop

القيم ثابتة في الذاكرة

WeakMap

المفاتيح: Objects فقط

ملوش size

مفيش Loop

القيم بتتحذف تلقائيًا من الذاكرة
*/

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);




/*

1) Object

المفاتيح: String / Symbol

يخزن بيانات بسيطة

حجم: Object.keys(obj).length

ترتيب المفاتيح مش مضمون

2) Map

المفاتيح: أي نوع

يخزن أي بيانات

حجم: map.size

يدعم التكرار (loop)

ترتيب الإدخال محفوظ

3) WeakMap

المفاتيح: Objects فقط

لا يوجد size

لا يمكن عمل loop

القيم تُحذف تلقائيًا من الذاكرة

4) Set

يخزن عناصر فريدة فقط

أي نوع بيانات

له size

يدعم loop

5) WeakSet

يخزن Objects فقط

لا يوجد size

لا يمكن عمل loop

القيم تُحذف تلقائيًا من الذاكرة




تعريف Garbage Collection

Garbage Collection = عملية تحرير الذاكرة تلقائيًا من الكائنات أو البيانات اللي لم تعد مستخدمة في البرنامج.

الهدف: منع Memory Leaks (تسريب الذاكرة)

يحدث بشكل آلي من قبل جافاسكريبت

المطور مش محتاج يديرها يدويًا
*/