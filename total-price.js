// calculate total price

var shoppingProducts = [
    {name: "shirt", price: 280, items: 4},
    {name: "fullpant", price: 450, items: 1},
    {name: "tee-shirt", price: 190, items: 3},
    {name: "polo-shirt", price: 320, items: 2},
    {name: "three-quter", price: 120, items: 6},
    {name: "panjabi", price: 650, items: 3}
]

let totalPrice = 0;
for(let product of shoppingProducts){
    totalProductPrice = product.price * product.items;
    totalPrice = totalPrice + totalProductPrice;
}
console.log("your total shopping amound is = "+ totalPrice);