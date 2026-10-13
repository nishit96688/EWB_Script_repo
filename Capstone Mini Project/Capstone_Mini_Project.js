// Capstone - Interactive Product Inventory & Analytics Dashboard

let inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// naya product add karo
let newName, newPrice;

while (true) {
  newName = prompt("Enter new product name:");
  if (newName && newName.trim() !== "") {
    break;
  }
  console.log("Name empty nahi hona chahiye. Dobara try karo.");
}

while (true) {
  newPrice = Number(prompt("Enter new product price:"));
  if (!isNaN(newPrice) && newPrice > 0) {
    break;
  }
  console.log("Price valid number hona chahiye. Dobara try karo.");
}

inventory.push({ name: newName, price: newPrice });

// category assign karo
inventory.forEach(item => {
  if (item.price < 50) {
    item.category = "Budget";
  } else if (item.price < 200) {
    item.category = "Standard";
  } else {
    item.category = "Premium";
  }
});

console.log("Initializing Inventory System");
console.log(`[Prompt executed: User adds "${newName}" at $${newPrice}]`);

console.log("- Processing Inventory Roster (forEach) -");
inventory.forEach(item => {
  console.log(`Item: ${item.name} ($${item.price}) -> Category: ${item.category}`);
});

// financial analytics
let totalValue = 0;
inventory.forEach(item => {
  totalValue += item.price;
});

console.log("- Financial Analytics -");
console.log(`Total Inventory Value: $${totalValue}`);

const affordable = inventory
  .filter(item => item.price < 200)
  .map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordable)}`);

const report = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(report)}`);

// extra function for tax/discount (scope demo)
function calculateTotalWithTax(items, taxRate = 0.1) {
  let total = 0;
  items.forEach(item => {
    total += item.price;
  });
  return total * (1 + taxRate);
}

const applyDiscount = (price, discount = 0.05) => price * (1 - discount);

console.log("Total with 10% tax: $" + calculateTotalWithTax(inventory));
console.log("Laptop after 5% discount: $" + applyDiscount(800));
