# Inventory & Analytics Dashboard

JavaScript Capstone Mini Project — built with plain HTML, CSS, and vanilla JavaScript.  
No frameworks, no build tools, no server required. Just open `index.html` in a browser.

---

## Project Overview

This is a browser-based version of the console-only capstone project from the JavaScript curriculum. It combines all core JS concepts into a single interactive dashboard:

- Variables & data types
- Operators & expressions
- Conditional logic (`if/else`, `switch`)
- Loops (`for`, `while`, `do...while` with `break` and `continue`)
- Functions (regular + arrow) with default parameters
- Block and function scope
- Arrays of objects
- Array methods: `forEach`, `filter`, `map`, `reduce`

Instead of `prompt()` (which only works in browser consoles), this version uses a proper HTML form for input, and renders results live on the page.

---

## Folder Structure

Everything lives in one folder. No subfolders.

```
inventory-dashboard/
├── index.html      # Markup + layout
├── style.css       # Dark bento-grid theme
├── script.js       # All the JavaScript logic
└── README.md       # This file
```

---

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- That's it. No Node.js, no Python, no install.

---

## How to Run

1. Download or clone this folder to your computer.
2. Open the folder.
3. **Double-click `index.html`.**

The dashboard opens in your default browser. Done.

### Optional — run with a local server

Some browsers block certain features when you open an HTML file directly via `file://`. If you hit any issue, run a simple server from the folder:

**Using Python (usually pre-installed):**

```bash
# Python 3
python -m http.server 5500
```

Then open: http://localhost:5500

**Using Node.js (if installed):**

```bash
npx serve
```

---

## Features

### 1. Add Products
Fill the form on the left (or top on mobile):
- Product name (minimum 2 characters, no duplicates)
- Price (must be a positive number, under $100,000)

Click **Add to Inventory**. The roster and analytics update instantly.

### 2. Inventory Roster
Every product shows:
- Its number (01, 02, 03…)
- Name
- Price
- Auto-assigned category: **Budget** / **Standard** / **Premium**

Category rules:
- Under $50 → Budget
- $50 to $199 → Standard
- $200 and above → Premium

### 3. Live Statistics
Three stat tiles at the top:
- **Total Inventory Value** — sum of all prices
- **Average Price** — total ÷ count
- **Total with 10% Tax** — total × 1.10

### 4. Affordable Items
Shows every product priced under $200 as colored pills (uses `filter()`).

### 5. Formatted Report
A menu-style list with dot leaders, showing each product and its price (uses `map()`).

### 6. Discounted Prices
Each product with its 5%-off price, strikethrough original price, and a "SAVE" badge (uses `map()`).

### 7. Load Demo Data
The **Load Demo** button in the top bar adds `Monitor ($150)` and `Keyboard ($45)` to test the dashboard quickly.

---

## Expected Output (matches the curriculum)

After loading demo data, the dashboard shows:

**Roster:**
- Laptop ($800) → Premium
- Mouse ($25) → Budget
- Monitor ($150) → Standard
- Keyboard ($45) → Budget

**Statistics:**
- Total: $1,020
- Average: $255.00
- With 10% Tax: $1,122.00

**Affordable Items (under $200):**
Mouse, Monitor, Keyboard

**Formatted Report:**
```
Laptop ......... $800
Mouse .......... $25
Monitor ........ $150
Keyboard ....... $45
```

**Discounted Prices (5% off):**
- Laptop: $760.00 (save $40.00)
- Mouse: $23.75 (save $1.25)
- Monitor: $142.50 (save $7.50)
- Keyboard: $42.75 (save $2.25)

---

## Where Each JS Concept Lives

| Concept | Location in `script.js` |
|---------|------------------------|
| `var` / `let` / `const` | `let inventory`, `const form`, etc. |
| Explicit type conversion | `Number(priceInput.value)` |
| `if...else` | `getCategory()` |
| `switch` | `getCategory()` tier switch |
| `for` loop | `validateProduct()` duplicate check |
| `while` + `continue` | `validateProduct()` price checks |
| Duplicate check with `break` | `validateProduct()` |
| Regular functions | `calcTotal()`, `getCategory()`, `validateProduct()` |
| Arrow functions | `calcAverage`, `applyTax`, `applyDiscount` |
| Default parameters | `applyTax(total, rate = 0.1)` |
| Function scope | Local vars inside every function |
| Block scope | `let` inside `{ }` blocks |
| Array of objects | `inventory` |
| `forEach` | `renderRoster()` |
| `filter` | `renderAnalytics()` affordable items |
| `map` | `renderAnalytics()` report + discounted |
| `reduce` | `calcTotal()` |

---

## Testing the Validation

Try these to confirm validation works:

| Input | Expected result |
|-------|-----------------|
| Name = `A` | Error: minimum 2 characters |
| Name = `Laptop` (already exists) | Error: duplicate product |
| Price = `-5` or `0` | Error: must be positive |
| Price = `999999` | Error: exceeds maximum |
| Price = `abc` (in number field) | Browser blocks it |

Errors appear below the form in red. Successful additions show in teal.

---

## Customization

Want to tweak the theme? Open `style.css` and edit the variables at the top:

```css
:root {
  --bg: #0a0b10;          /* page background */
  --teal: #14e8b6;        /* primary accent */
  --purple: #a78bfa;      /* secondary accent */
  --pink: #f472b6;        /* tertiary accent */
}
```

Change any of these and refresh the page — the whole palette updates.

Want to change category thresholds? Open `script.js` and edit the numbers in `getCategory()`:

```javascript
if (price < 50) {
  tier = "budget";
} else if (price < 200) {
  tier = "standard";
} else {
  tier = "premium";
}
```

---

## Known Limitations

- Data does not persist. Refresh the page and the inventory resets to the initial two items.
- No edit or delete for individual products. (Those are extensions the assignment does not require.)
- The dashboard is client-side only — no backend, no database.

If you want persistence, you can add `localStorage`. Hint: after every change, save `inventory` with `localStorage.setItem("inventory", JSON.stringify(inventory))`, and on page load, restore it with `JSON.parse(localStorage.getItem("inventory"))`.

---

## Browser Support

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses CSS Grid, flexbox, `mask-image`, and `backdrop-filter`. Older browsers (like IE) will not render it correctly.

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, gradients, backdrop blur
- **Vanilla JavaScript (ES6+)** — arrow functions, template literals, destructuring, array methods
- **Google Fonts** — Space Grotesk + JetBrains Mono

---

## Project Submission Notes

This project satisfies the following curriculum requirements:

- ✅ Variables and data types
- ✅ Operators and expressions
- ✅ Conditional logic with `if/else` and `switch`
- ✅ Loop control with `break` and `continue`
- ✅ Functions with parameters and default values
- ✅ Scope demonstration
- ✅ Arrays of objects
- ✅ `forEach`, `filter`, `map`, `reduce`

The only intentional deviation from the original assignment: input is captured via an HTML form instead of `prompt()`, since this is a browser UI rather than a console script. All the underlying logic is the same.

---

## Author

JS Curriculum Capstone — Interactive Product Inventory & Analytics Dashboard  
Built as part of the internship assignment.
