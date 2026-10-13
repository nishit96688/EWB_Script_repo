// Assignment 6 - Arrays, Objects, Methods
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("- All Products (forEach) -");
products.forEach(item => {
  console.log(`Item: ${item.name} - Price: $${item.price}`);
});

const under50 = products.filter(item => item.price < 50);
console.log("- Filtered Products (Price < $50) -");
console.log(under50);

const tags = products.map(item => `${item.name.toUpperCase()} costs $${item.price}`);
console.log("- Mapped Product Tags (map) -");
console.log(tags);