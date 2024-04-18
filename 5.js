class Product {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    get productInfo() {
        return `Product Name: ${this.name}, Quantity: ${this.quantity}, Price: $${this.price}`;
    }
    set setPrice(newPrice) {
        if (typeof newPrice === 'number' && newPrice > 0) {
            this.price = newPrice;
        } else {
            console.log("Price should be a positive number.");
        }
    }
}
const product = new Product("Phone", 10, 500);
const copyProduct = { ...product };
copyProduct.setPrice = 600;
console.log("Product Info:", product.productInfo);
console.log("Copy Product Info:", copyProduct.productInfo);
function FindAllMethods(obj) {
    const methods = [];
    for (let prop in obj) {
        if (typeof obj[prop] === 'function') {
            methods.push(prop);
        }
    }
    return methods;
}
const testObj = {
    method1: () => {},
    method2: function() {},
    prop1: 'value1',
    prop2: 'value2'
};
console.log("Methods:", FindAllMethods(testObj));
function InvertKeyValue(obj) {
    const invertedObj = {};
    for (let key in obj) {
        invertedObj[obj[key]] = key;
    }
    return invertedObj;
}
const colorMap = {
    red: "qizil",
    green: "yashil"
};
console.log("Inverted Key-Value:", InvertKeyValue(colorMap));
