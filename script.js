function* ganerateFunction(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}


let a = ganerateFunction()

for (const element of a) {
  console.log(element)
}

console.log(a.next().value)

for (const element of a) {
  console.log(element)
}