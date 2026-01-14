/*
= To Do List Add
= By: 3liaymn
= v 1.0
*/

let inputTittle = document.querySelector("#tittle")
let addBtn = document.querySelector(".addBtn")
let box = document.querySelector(".box")

addOldItem()
addBtn.addEventListener("click", addTodo)


function addTodo() {
    const title = inputTittle.value.trim();
    if (title === "") return;

  // 1) هات الداتا القديمة أو Object فاضي
    let todolist = JSON.parse(localStorage.getItem("todolist")) || {};

  // 2) اعمل ID جديد
  let id = Date.now(); // مضمون يكون unique

  // 3) أضف المهمة
    todolist[id] = {
    title: title,
    };

  // 4) خزّن تاني
    localStorage.setItem("todolist", JSON.stringify(todolist));
// 5) جلب بعد التخزين
    // let savedTodos = JSON.parse(localStorage.getItem("todolist"));
// 6) ارسال البيانات للانشاء
    creatItem(title, id )

  // 5) فضّي الانبوت
    inputTittle.value = "";
}

function creatItem (text, remove) {
    // create box to content the tittle and button remove
    let item = document.createElement("div")
    item.className = "item"
    // create span For title
    let title = document.createElement("span")
    title.className = "title"
    title.textContent = text
    item.appendChild(title)
    // create remove button to remove title
    let removeBtn = document.createElement("button")
    removeBtn.className = "removeBtn"
    removeBtn.textContent = "Delate"
    item.appendChild(removeBtn)
    // Add item to box content
    box.appendChild(item)
    // Remove item from box
    removeBtn.addEventListener("click", () => {
        item.remove()
        deleteTodo(remove)
    })
}

function deleteTodo(id) {
  // 1) هات الداتا
  let todolist = JSON.parse(localStorage.getItem("todolist")) || {};

  // 2) امسح العنصر
  delete todolist[id];

  // 3) خزّن التعديل
  localStorage.setItem("todolist", JSON.stringify(todolist));
}

function addOldItem () {
    let todolist = JSON.parse(localStorage.getItem("todolist"))
    for (let id in todolist) {
        creatItem(todolist[id].tittle, id)
    }
}
