// Assignment 4 - Loops
console.log("- Multiplication Table of 5 -");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

let num = 10;
while (true) {
  num++;
  if (num > 10 && num % 6 === 0) {
    console.log("- First number > 10 divisible by 6 -");
    console.log(`Found: ${num}`);
    break;
  }
}

let count = 0;
do {
  count++;
  if (count === 3) {
    continue; // 3 skip kar diya
  }
  // console.log(count); // optional
} while (count < 5);