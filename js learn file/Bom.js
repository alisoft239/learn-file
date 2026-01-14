//  #-- Alert , Confirm , Prompt --------------------103--#
// 1- بتعطل تحميل الصفحة و البيانات
// 2- لا تستخدم حديثاً
alert("test alert"); 

// 1- بترجع بوليان فاليو و على حسب الفوليو دي بيحصل أكشن معين
// 2-  بتعطل تحميل الصفحة و البيانات
const result = confirm("هل أنت متأكد من الحذف؟");

if (result) {
  console.log("تم التأكيد");
} else {
  console.log("تم الإلغاء");
}

// 1- بتاخد مدخلات من المستخدم
// 2- بترجع المدخلات دي كسترينج
// 3- بتعطل تحميل الصفحة و البيانات
// 4- ممكن تحدد قيمة افتراضيه للمدخلات
const msg = prompt("من فضلك أدخل إسمك", "user name here");
console.log("user name is: " + msg)


// #-- setTimeout , clearTimeout --------------------104--#
// مهمة اوي اوي
// 1- functoin
// 2- time
// 3- prma function 
const counter = setTimeout(sayhello, 3000, "ali")


function sayhello (name) {
    console.log(`Hello : ${name}`)
} 

let stop = document.getElementById("stop")
stop.onclick = () => {
    // بتوقف الدالة عن التنفيذ و بتطلب الهاندل بتاعها - يعني لازم تمسك الدالة بمتغير
    clearTimeout(counter)
    console.log("stop timeout")
}


// #-- setInterval , clearInterval --------------------105--#
// مهمة اوي اوي
// 1- functoin
// 2- time
// 3- prma function 

let time = document.querySelector("div")

function count () {
    time.innerHTML -= 1
    if(time.innerHTML === "0")
    {
        clearInterval(ali)
        time.innerHTML = "<a href='https://www.google.com/' >Your link is ready</a>"
    }
}

// 1- run code again and again
// تكرار الاكشن كل زمن معين ده الفرق بينها و بين التايم أوت
let ali = setInterval(count, 1000)


// #-- location Object --------------------106--#

/*
  BOM [Browser Object Model]
  - location Object
  بتعرض و تعدل في الرابط و تقدر تتوجع لموضوع و مكان معين في الصفحة
  --- href Get / Set [URL || Hash || File || Mail]
  بتجيب الهوست و البورت بتوعك
  --- host
  بتجيب الهوست بس يتاعك 
  --- hostname
  --- hash
  بتجيب او تغير البروتوكول بتاعك من https or http
  --- protocol
  اعادة تحميل الصفحة
  --- reload()
  بتوجهك لرابط بدون حفظ السجل
  --- replace()
  بتوجهك لرابط مع حفظ السجل
  --- assign()
*/
document.body.style.backgroundColor = "#242424ff"

console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.hash);
// location.replace("https://www.google.com")
// location.assign("https://www.google.com")

// #-- Window.Open --------------------107--#

// طول ما انت مش تحكم في الطول و العرض مش هتفتح في نافذة جديدة
/*
  BOM [Browser Object Model]
  بتفتح وينجوز جديدة زي اللي بتختار منها حساب جوجل لما تيجي تعمل تسجيل دخول
  - open(URL [Opt], Window Name Or Target Attr [تتفتح في صفحة جديدة ولا لاOpt], Win Features [Opt], History Replace [Opt])
  مش هتشتغل الا مع ويندوز معمولها اوبن بالجافا اسكربت
  - close()
  - Window Features
  عشان تتحكم في عرض الويندوز اللي فتحتها دي
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function () {
  window.open("", "_self", "", false);
}, 2000);

setTimeout(function () {
  window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
}, 2000);

// #-- History API --------------------108--#
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  عدد المواقع في التصفح
  ------ length
  --- Methods
  ترجع للخلف
  ------ back()
  تتقدم لقدام
  ------ forward()
  تحط رقم و يوديك للموقع على حسب الترتيب و لو حطيت صفر يعمل اعادة تشغيل 
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

// #-- scrollTo , scrollBy --------------------109--#

/*
  BOM [Browser Object Model]
  بتمنع تحميل الصفحة
  - stop()
  تعمل طباعة و هتتعلم مستقبلاً تتحكم في جزء معين يطبع
  - print()
  بتعمل فوكس على ويندوز انت كنت فاتحها
  - focus()
  بتوديك في مكان معين افقي و عامودي و تقدر تعملها اسموز
  - scrollTo(x, y || Options)
  دي الجديدة باين
  - scroll(x, y || Options)
  بتوديك في مكان للصفحة و لو كررتها بتزود
  - scrollBy(x, y || Options)
*/

let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

window.scrollTo({
  left: 500,
  top: 200,
  behavior: "smooth"
});


// #-- scrollY , scrollX ----------------------------110--#
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset   old Browser]
  - scrollY [Alias => PageYOffset   old Browser]
*/

console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) { // لازم تعمل يساوي
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};


// #-- Local Storage ----------------------------------112--#



/*
  BOM [Browser Object Model]
  Local Storage
  - setItem انشاء المتغير عشان تحفظة
  - getItem تجيبه 
  - removeItem تشيله
  - clear تشيل كله
  - key تجيب الكاي على حسب الاندكس

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
window.localStorage.removeItem("color");

// Remove All
window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);

// #-- Local Storage Practice ----------------------------------112--#


/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
// #-- Session Storage  ----------------------------------------113--#

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
};

