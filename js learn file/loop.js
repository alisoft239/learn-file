// #48

for (let i = 0; i < 10; i++){
    console.log(i)
}

// #49

let myfrindes = ["ali","adham",44,55,54,"ali", "ali", "ali"]
let onlyname = []
for (let i = 0; i < myfrindes.length; i++) {
    if (typeof myfrindes[i] === "string"){
        onlyname.push(myfrindes[i])
    }
}

console.log(onlyname)


// #50

//   - Nested Loops


let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}

// #51

/*
  Loop Control
  - Break  توقف التكرار كله
  - Continue تخطي للكود في التكرار ده
  - Label عشان تتحكم مين يقف في شروط معينه
*/

let productss = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colorss = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < productss.length; i++) {
  console.log(productss[i]);
  nestedLoop: for (let j = 0; j < colorss.length; j++) {
    console.log(`- ${colorss[j]}`);
    if (colorss[j] === "Green") {
      break mainLoop;
    }
  }
}

// #52
// Loop For Advanced Example


let products3 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products3[i]);
  i++;
  if (i === products3.length) break;
}

// #53
// Products Practice


 products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
 colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}

// #54
// - While


 products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index += 1;
}

// #55
// - Do...While


 products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

 i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);