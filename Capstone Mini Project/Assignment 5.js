// Assignment 5 - Functions & Scope
function areaStandard(length = 5, width = 4) {
  return length * width;
}

const areaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${areaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${areaArrow(10, 3)}`);

{
  let blockVar = "main block ke andar hoon";
  console.log(blockVar);
}

try {
  console.log(blockVar);
} catch (err) {
  console.log(`Scope Test Error: ${err.name}: ${err.message}`);
}