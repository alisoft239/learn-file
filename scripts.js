
// 	const dollarInput = document.querySelector('[type="number"]');
//     const result = document.querySelector('.result');

    
    
//     dollarInput.addEventListener("input", function () {  // input event to detect changes in the input field
//     let number = parseFloat(dollarInput.value).toFixed(2);
//     let re = number * 47.55 ;
//     result.textContent = `${number} USD Dollar = ${re.toFixed(2)} Egyptian Pound`;
// });



//----------------------------------------------------------------------------------------

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// oneTittle = one.getAttribute("title");
// twoTittle = two.getAttribute("title");
// one.setAttribute("title", twoTittle);
// two.setAttribute("title", oneTittle);
// onecontent = one.textContent;
// twocontent = two.textContent;
// one.textContent = twocontent;
// two.textContent = `${onecontent} 2`;


//----------------------------------------------------------------------------------------

// let myImage = document.querySelectorAll("img");

// for(let i = 0; i < myImage.length; i++) {

//     let ele = myImage[i];
// if (ele.hasAttribute("alt") === true)
//  {
//     ele.setAttribute("alt", "Old ");
//  } else {
//     ele.setAttribute("alt", "Elzero New");
//  }

// }


//----------------------------------------------------------------------------------------



// let numberInput = document.querySelector("[name='elements']");
// let textInput = document.querySelector("[name='texts']");
// // let div = document.querySelector("[value='Div']");
// // let section = document.querySelector("[value='Section']");
// let select = document.querySelector("select");

// let content = document.querySelector(".results");

// document.forms[0].onsubmit = (form) => {
//     form.preventDefault();

//     let numberOfElements = parseInt(numberInput.value);
//     let textOfElements = textInput.value;
    
    
//     if(content.children.length > 0){
//         content.innerHTML = "";
//     }

//     for(let i = 0; i < numberOfElements; i++){

//             // <div class="box" title="Element" id="id-1">Hello</div>
//             if (select.value === "Div"){
//             let box = document.createElement("div");
//             box.className = "box";
//             box.title = "Element";
//             box.id = `id-${i + 1}`;
//             box.textContent = textOfElements;
//             content.appendChild(box);
//             }else if (select.value === "Section"){
//             let box = document.createElement("Section");
//             box.className = "box";
//             box.title = "Element";
//             box.id = `id-${i + 1}`;
//             box.textContent = textOfElements;
//             content.appendChild(box);
//             }
//         }
//     }
    


// document.body.appendChild(content);




let result = document.querySelector(".assign .classes-list div");
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");

addInput.onblur = function () {
let addArray = addInput.value.toLowerCase().split(" ");
for (let i = 0; i < addArray.length; i++) {
if (addArray[i] !== "") {
let span = document.createElement("span");
let spanText = document.createTextNode(addArray[i]);
span.appendChild(spanText);
result.appendChild(span);
}
}
/* 
To Remove The Text No Classes ..... 
Whent We Have Classes 
*/
let text = document.querySelector("p.result");
if (result.children.length > 0 && text !== null) {
text.remove();
}
addInput.value = "";
};
removeInput.onblur = function () {
let removeArray = removeInput.value.toLowerCase().split(" ");
let allSpans = document.querySelectorAll("span");
/* 
To Delete The Clasese, IF The Same Word 
*/
for (let i = 0; i < allSpans.length; i++) {
if (removeArray.indexOf(allSpans[i].textContent) !== -1) {
allSpans[i].remove();
}
}

/* 
IF The Result Empty, Doesn't Have Classes 
Create Element, With Content No Classes To Show 
*/
if (result.children.length === 0) {
createText();
}
removeInput.value = "";
};
function createText() {
let text = document.createElement("p");
text.className = "result";
text.appendChild(document.createTextNode("No Classes To Show"));
result.appendChild(text);
}
createText();