// Assignment 2 - Operators, Input
let billAmount = Number(prompt("Enter bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

let tip = billAmount * (tipPercentage / 100);
let total = billAmount + tip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);