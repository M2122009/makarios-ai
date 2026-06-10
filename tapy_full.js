// 🔥 Tapy Full — Mini Marketplace JS in One File

console.log("🔥 Welcome to Tapy Full — Mini Marketplace JS");

// Utility functions
function generateId() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

function formatPrice(price) {
    return "$" + price.toFixed(2);
}

// Product array
let products = [];

// Add product
function addProduct(name, price, description="No description") {
    const p = {
        id: generateId(),
        name: name,
        price: price,
        description: description,
        createdAt: new Date()
    };
    products.push(p);
    return p;
}

// List all products
function listProducts() {
    if(products.length === 0) {
        console.log("No products available.");
        return;
    }
    for(let count=0; count<products.length; count=count+1) {
        const p = products[count];
        console.log(`ID: ${p.id} | Name: ${p.name} | Price: ${formatPrice(p.price)} | Description: ${p.description}`);
    }
}

// Find product by ID
function findProduct(id) {
    for(let count=0; count<products.length; count=count+1) {
        if(products[count].id === id) {
            return products[count];
        }
    }
    return null;
}

// Remove product by ID
function removeProduct(id) {
    const originalLength = products.length;
    products = products.filter(p => p.id !== id);
    return products.length < originalLength;
}

// Update product
function updateProduct(id, data) {
    const p = findProduct(id);
    if(!p) return null;
    if(data.name) p.name = data.name;
    if(data.price) p.price = data.price;
    if(data.description) p.description = data.description;
    return p;
}

// ==== DEMO ====

console.log("\n=== Adding Demo Products ===");
const p1 = addProduct("Template A", 25, "A nice HTML template");
const p2 = addProduct("Ebook Pro", 15, "Ebook with advanced tips");
const p3 = addProduct("Design Pack", 40, "Icons, Fonts, Templates");

// List all products
console.log("\n=== All Products ===");
listProducts();

// Find a product
console.log("\n=== Find Product ID:", p2.id, "===");
console.log(findProduct(p2.id));

// Update a product
console.log("\n=== Update Product ID:", p2.id, "===");
updateProduct(p2.id, { price: 45, name: "Design Pack Premium" });
console.log(findProduct(p2.id));

// Remove a product
console.log("\n=== Remove Product ID:", p1.id, "===");
removeProduct(p1.id);

// List products after removal
console.log("\n=== Products After Removal ===");
listProducts();

console.log("\n🔥 Tapy Full Demo Finished");
