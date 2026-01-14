/*  79 -
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());


// ----------------------------------------------------------------------------------------------


/*  80 -
/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country
console.log(user[myVar]); // user.country


// ----------------------------------------------------------------------------------------------


/*   81 -





  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());


// ----------------------------------------------------------------------------------------------


/*  82 -



  Object
  - Create With New Keyword new Object();
*/

let user = new Object({
  age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function () {
  return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());


// ----------------------------------------------------------------------------------------------

/*          83 -



  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user.age);
console.log(user.ageInDays());

// ----------------------------------------------------------------------------------------------


//   84
/*
  Object
  - Create Object With Create Method
*/

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2; // لازم نستخدم this هنا عشان لما تنسخ ال object مش يروح يدور على ال age في ال global scope
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({}); // create empty object

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user); // create object copied from user object

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge()); 

// ----------------------------------------------------------------------------------------------


/*  85 -

  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100, // هياخد اول قيمه لو نفس الاسم يعني مش هياخد دي
  prop3: 3,
    meth3: function () {
    return this.prop2;
  },
};

// بينسخ كل الاوبجكت للاوبجكت الجديد 
let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200; // بيحدث القيمه
finalObject.prop4 = 4;

console.log(finalObject);

//  لو مفيش اي مشاريع قديمة تقدر تعمل جديد فاضي
let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);


Object.keys(game.releases)   // بترحع مصفوفة فيها كل ال keys بتاعت الاوبجكت
// Object.entries(myInfo));  Best - return Array