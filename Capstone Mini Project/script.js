/* =========================================================
   Inventory & Analytics Dashboard
   JS Capstone Project — covers:
   - Variables & data types
   - Arrays of objects
   - Functions (regular + arrow)
   - if/else + switch for category
   - Loops with break/continue
   - Array methods: forEach, filter, map, reduce
   ========================================================= */

// ---------- State ----------
let inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// ---------- DOM refs ----------
const form          = document.getElementById("product-form");
const nameInput     = document.getElementById("product-name");
const priceInput    = document.getElementById("product-price");
const formMsg       = document.getElementById("form-msg");
const rosterBody    = document.getElementById("roster-body");
const countBadge    = document.getElementById("count-badge");
const totalValueEl  = document.getElementById("total-value");
const avgPriceEl    = document.getElementById("avg-price");
const taxEl         = document.getElementById("total-with-tax");
const affordableEl  = document.getElementById("affordable-list");
const formattedEl   = document.getElementById("formatted-list");
const discountedEl  = document.getElementById("discounted-list");
const demoBtn       = document.getElementById("demo-btn");
const calcBtn       = document.getElementById("calc-btn");

// ---------- Helper: show message ----------
function showMsg(text, type = "") {
  formMsg.textContent = text;
  formMsg.className = "msg " + type;
  if (text) {
    setTimeout(() => {
      formMsg.textContent = "";
      formMsg.className = "msg";
    }, 3000);
  }
}

// ---------- Function: assign category ----------
// Regular function using if/else + switch
function getCategory(price) {
  if (isNaN(price) || price <= 0) return "Invalid";

  let tier;
  if (price < 50) {
    tier = "budget";
  } else if (price < 200) {
    tier = "standard";
  } else {
    tier = "premium";
  }

  // switch sirf return label decide karne ke liye
  switch (tier) {
    case "budget":
      return "Budget";
    case "standard":
      return "Standard";
    case "premium":
      return "Premium";
    default:
      return "Unknown";
  }
}

// ---------- Function: validate input ----------
// Loop + break + continue use kiya hai jaise assignment me maanga tha
function validateProduct(name, price) {
  const errors = [];

  // name check
  if (!name || name.trim().length < 2) {
    errors.push("Name kam se kam 2 characters ka hona chahiye");
  }

  // price check via loop (demonstrating while + continue)
  let i = 0;
  const checks = [isNaN(price), price <= 0, price > 100000];
  while (i < checks.length) {
    if (!checks[i]) {
      i++;
      continue; // skip valid condition
    }
    if (i === 0) errors.push("Price ek valid number hona chahiye");
    if (i === 1) errors.push("Price 0 se bada hona chahiye");
    if (i === 2) errors.push("Price 100000 se zyada nahi ho sakta");
    break;
  }

  // duplicate name check (loop with break)
  for (let j = 0; j < inventory.length; j++) {
    if (inventory[j].name.toLowerCase() === name.trim().toLowerCase()) {
      errors.push(`"${name}" already inventory me hai`);
      break;
    }
  }

  return errors;
}

// ---------- Function: render roster (forEach) ----------
function renderRoster() {
  rosterBody.innerHTML = "";

  if (inventory.length === 0) {
    rosterBody.innerHTML = '<span class="empty">no products yet — add one from the form</span>';
    countBadge.textContent = "0 items tracked";
    document.getElementById("roster-count").textContent = "0";
    return;
  }

  inventory.forEach((item, index) => {
    const category = getCategory(item.price);
    const row = document.createElement("div");
    row.className = "roster-item";
    row.innerHTML = `
      <div class="idx">${String(index + 1).padStart(2, "0")}</div>
      <div class="p-name">${item.name}</div>
      <div class="p-price">$${item.price}</div>
      <span class="badge ${category.toLowerCase()}">${category}</span>
    `;
    rosterBody.appendChild(row);
  });

  countBadge.textContent = inventory.length + " item" + (inventory.length !== 1 ? "s" : "") + " tracked";
  document.getElementById("roster-count").textContent = inventory.length;
}

// ---------- Function: calculate analytics ----------
// regular function for total
function calcTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// arrow function for average
const calcAverage = (items) =>
  items.length === 0 ? 0 : calcTotal(items) / items.length;

// arrow function for tax
const applyTax = (amount, rate = 0.1) => amount * (1 + rate);

// arrow function for discount
const applyDiscount = (price, rate = 0.05) => price * (1 - rate);

function renderAnalytics() {
  // Stats
  const total = calcTotal(inventory);
  totalValueEl.textContent = "$" + total;

  const avg = calcAverage(inventory);
  avgPriceEl.textContent = "$" + avg.toFixed(2);

  const taxed = applyTax(total, 0.1);
  taxEl.textContent = "$" + taxed.toFixed(2);

  // Affordable chips
  const affordable = inventory.filter((item) => item.price < 200);
  if (affordable.length === 0) {
    affordableEl.innerHTML = '<span class="empty">no items match</span>';
  } else {
    affordableEl.innerHTML = affordable
      .map(
        (item) => `
          <span class="item-chip">
            <span class="dot"></span>
            ${item.name}
            <span class="chip-price">$${item.price}</span>
          </span>
        `
      )
      .join("");
  }

  // Formatted report (dot leaders)
  if (inventory.length === 0) {
    formattedEl.innerHTML = '<span class="empty">no data</span>';
  } else {
    formattedEl.innerHTML = inventory
      .map(
        (item) => `
          <div class="report-row">
            <span class="label">${item.name}</span>
            <span class="leader"></span>
            <span class="value">$${item.price}</span>
          </div>
        `
      )
      .join("");
  }

  // Discounted prices
  if (inventory.length === 0) {
    discountedEl.innerHTML = '<span class="empty">no data</span>';
  } else {
    discountedEl.innerHTML = inventory
      .map((item) => {
        const newPrice = applyDiscount(item.price, 0.05);
        const saved = item.price - newPrice;
        return `
          <div class="discount-row">
            <div class="product">${item.name}</div>
            <div class="prices">
              <span class="old">$${item.price}</span>
              <span class="new">$${newPrice.toFixed(2)}</span>
              <span class="save-badge">-$${saved.toFixed(2)}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }
}

// ---------- Refresh everything ----------
function refresh() {
  renderRoster();
  renderAnalytics();
}

// ---------- Form submit ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  const errors = validateProduct(name, price);
  if (errors.length > 0) {
    showMsg(errors[0], "err");
    return;
  }

  inventory.push({ name: name, price: price });
  showMsg(`"${name}" add ho gaya`, "ok");

  nameInput.value = "";
  priceInput.value = "";
  nameInput.focus();

  refresh();
});

// ---------- Demo data button ----------
demoBtn.addEventListener("click", () => {
  // agar Monitor already hai to duplicate mat karo
  if (inventory.some((item) => item.name.toLowerCase() === "monitor")) {
    showMsg("Demo data already loaded", "");
    return;
  }

  inventory.push({ name: "Monitor", price: 150 });
  inventory.push({ name: "Keyboard", price: 45 });

  showMsg("Demo data load ho gaya", "ok");
  refresh();
});

// ---------- Recalculate ----------
calcBtn.addEventListener("click", () => {
  renderAnalytics();
  showMsg("Analytics refresh ho gaye", "ok");
});

// ---------- Initial render ----------
refresh();