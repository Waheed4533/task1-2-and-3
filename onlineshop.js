var mycustomer = { id: 1, name: "John Doe", email: "john@example.com" };
var mycart = [
    { id: 1, name: "shoes", price: 10, category: "foot wear" },
    { id: 2, name: "glasses", price: 20, category: "sunglasses" },
    { id: 3, name: "iphone", price: 30, category: "electronics" },
];
function calculateTotalPrice(mycart) {
    var totalPrice = 0;
    for (var _i = 0, mycart_1 = mycart; _i < mycart_1.length; _i++) {
        var product = mycart_1[_i];
        totalPrice += product.price;
    }
    return totalPrice;
}
var myorder = { mycustomer: mycustomer, mycart: mycart };
var kullqeemat = calculateTotalPrice(myorder.mycart);
console.log("The total price in the cart is ".concat(kullqeemat));
