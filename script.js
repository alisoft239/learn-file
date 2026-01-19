
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

// => every think
i => كابتل او اسمول  ali=Ali 
g => globel    ex:all index ali on index 0 - Ali on index 4

(x|y) ex: (ali|ayman|mohammd)
[0-9] 
[^0-9] 
[a-z] 
[^a-z]
[A-Z]
[^A-Z]
[abc] 
[^abc]
. => all character => Array 
\w => words [a-z A-Z 0-9]
\W => not words
\d => digits
\D => not digits
\s => whitespace
\S => not whitespace
\b x => frist word
x \b => end word
n+ => one or more  \w+ a - al - ali 
n* => zero or more \w* "" - ali 
n? => zero or one last char   - https? https http 
n{x}   => Number of | بتحدد كام رقم 
n{x,y} => Range
n{x,}  => At Least x
- replace
- replaceAll
^n => عشان لو عايز تبدا بحاجه معينه
n$ => نهاية الفحص
*/


/*
  Regular Expression
  - Input Form Validation Practice
*/

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;


//   // let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
// const phoneRe = /^1[3-9]\d{9}$/;

//   let validationResult = phoneRe.test(phoneInput);
  
//   return validationResult;
// }



/*
  Regular Expression
  - Challenge
*/


// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://wwt.e-rw.elzero.org';
// let url5 = 'https://www.elzero.org:5000/';
// let url6 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';



// let re = /^(https?:\/\/)* ((([a-zA-Z0-9])(\.|-)+) *([a-zA-Z0-9]))+(:\d{2,5})*\/*.*$/g;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// console.log(url6.match(re));

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

// class User {
//   // Private Property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);



class User  {
  static count = 0
  #salery
  constructor (id, name, salery, userName) {
    this.id = id
    this.name = name
    this.#salery = salery
    this.userName = userName
    this.info = () => {
      return `  id: ${id}
      Name: ${name}
      UserName: ${userName}
      Salery: ${salery}`
      User.count++
    }
  }
  uptadeSalery (salery){ // لو عايو تعمل تعديل لاي قيمة بيكون من خلال دالة تسمح بالتعديل
    this.salery = salery
  }
getSalery(){
    return this.#salery
  }
}

class Admin extends User {
  
  constructor (id, name, salery, userName, parmitions) {
    super (id,name,"",userName)
    this.s = salery
    this.p = parmitions
  }
    
}


let user101 = new User(101, "Ali Ayman", 12000, "3liaymn")
let user102 = new Admin(102, "Moh Ayman", 15000, "Moh", 1)

// console.log(user102.id)
// console.log(user102.name)
console.log(user102.salery)
console.log(user101.getSalery())
// console.log(user102.userName)
// console.log(user102.p)

