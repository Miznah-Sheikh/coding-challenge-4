// Task 1: If Statements - Customer Discounts
let purchaseAmount = 130;
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // Apply 15% discount
}

console.log(`Final amount after discount: $${finalAmount}`);


// Task 2: For Loop - Sales Report
let sales = [115, 75, 150, 200, 90];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);


// Task 3: While Loop -  Depletion of Inventory
let stock = 10;

while (stock > 0) {
    console.log(`Decreasing stock: ${stock}`);
    stock--;
}

console.log("Stock has reached zero.");


// Task 4: Do...While Loop - Customer Survey
let responses = 0;

do {
    console.log(`Response count: ${responses}`);
    responses++;
} while (responses < 3);

console.log("Survey complete.");


// Task 5: For...In Loop - Employee Information
let employee = {
    name: "Musa",
    position: "Area Manager",
    salary: 76000
};

for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}


// Task 6: For...Of Loop - Product Listings
let products = ["Laptop", "Mouse", "Keyboard"];

for (let product of products) {
    console.log(`Product: ${product}`);
}


// Task 7: forEach() Method - Order Processing
let orders = [102, 103, 104];

orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});


// Task 8: Function Declaration - Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let taxAmount = calculateTax(200, 0.1); // 10% tax
console.log(`Tax amount: $${taxAmount}`);


// Task 9: Function Expressions - Discount Application
let applyDiscount = function(price, discount) {
    return price - (price * (discount / 100));
};

let discountedPrice = applyDiscount(100, 20); // 20% discount
console.log(`Discounted price: $${discountedPrice}`);


// Task 10: Arrow Functions - Loyalty Points
let calculatePoints = (purchaseAmount) => purchaseAmount / 10;

let points = calculatePoints(150); // 150 / 10 = 15 points
