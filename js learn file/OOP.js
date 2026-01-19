/* 149
  Constructor Function
  - New Syntax
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userOne instanceof User); // عشان تعرف مرتبط بالاوبجكت ده ولا لا 
console.log(userOne.constructor === User);




/* 150
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg); // Native Code
console.log(userTwo.writeMsg); // Native Code



/*  151
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) { // To update value 
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);

// Defranse Primitive String & String Object
let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne); 
console.log(typeof strTwo);

console.log(strOne instanceof String); //معرفة الارتباط هل الاوبجكت ده من الاوبجكت ده
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);


/* 152
  Class
  - Static Properties And Methods
*/

class User {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

console.log(userOne.u);
console.log(userTwo.u);
console.log(userOne.count);
console.log(User.count);
console.log(User.sayHello());
console.log(User.countMembers());



/* 153
  Class
  - Inheritance التوريث
*/

// Parent Class
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends User { // تحطها قبل الكلاس اللي هتورثه
  constructor(id, username, permissions) {
    super(id, username); // تحط كل المتغيرات اللي في المتوارث منه
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne.u);
console.log(userOne.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());


/* 154
  Encapsulation تغليف
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access. تعمل متغير برايفت
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e; // لازم تعمله تعريف و تحط الشباك
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() { // دي طريقة اسمها هيدين انبلمنتيشن، يعني حاجع بتحصل جوه وانت مش عارف
    return parseInt(this.#e); // ده الهيدين البلمنتيشن
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");

console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);


/* شرح بسيط للي فات

  - لو عايو تعمل تعديل لاي قيمة بيكون من خلال دالة تسمح بالتعديل
  - لو استدعيت متغير او دالة مش static من الاوبجكت نفسه هيظهر خطأ 
  - لو كان استاتيك و عملت استدعاء من اوبجكت أنشاته ، هيديك انديفايند
  - static only for class 
  - لما تيجي تورث أوبجكت بتورث كل حاجه حتى البرايفت، و السوبر بتكون عاديه تستقبل كله
  بس ملكش اكسيس عليه برضه إلا لو عملت هيدين انبلمنتيشن
*/

