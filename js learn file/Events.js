/*    92

  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};


//----------------------------------------------------------------------------------------


/*   93 -

  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};



//----------------------------------------------------------------------------------------

/*  94 -
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};


//----------------------------------------------------------------------------------------

/*    95 -

  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};


//----------------------------------------------------------------------------------------


/*    96 -


  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty("background-color", "red", "important");




//----------------------------------------------------------------------------------------

/*   97 -


  DOM [Deal With Elements]
  - before [Element || String]
    تعني قبل العنصر الحالي
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

createdP.textContent = "This is a created paragraph";
element.before("Hello before");
element.after("Hello after"); 
element.append(createdP);  // هيضيف العنصر في اخر العنصر
element.prepend("Hello prepend"); // هيضيف النص في اول العنصر
// element.remove();




//----------------------------------------------------------------------------------------



/*    98 -
  DOM [Traversing]
  - nextSibling
  تعني العنصر اللي بعده او قبله في نفس المستوى بما فيهم النصوص والفراغات
  - previousSibling
  تعني العنصر اللي قبله او بعده في نفس المستوى بما فيهم النصوص والفراغات
  - nextElementSibling
    تعني العنصر اللي قبله في نفس المستوى
  - previousElementSibling
    تعني العنصر اللي بعده في نفس المستوى
  - parentElement  
    تعني العنصر الاب للعنصر الحالي
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
}


//----------------------------------------------------------------------------------------

/*    99 -
  DOM [Clone Node]
  - cloneNode(deep)
*/
  
let p = document.getElementById("my-p").cloneNode(true) // لو حطيت true هينسخ العنصر بكل ما فيه ، لو لا هينسخ المتغيرات بس
// تعمل نسخه للعنصر كله، تكون عميقه لو حطيت true و تكون سطحيه لو حطيت false
// تكون مفيده لو عايز تنسخ عنصر مع كل العناصر اللي جواه بدون ما تعدل في الاصلي
let div = document.querySelector("div");

p.id = "new-class"
// ممكن اغير اي خاصيه في العنصر بعد نسخه

div.appendChild(p)