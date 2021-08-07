// find cheapest phone 

let phones = [
    {name: "nokia", price: 21000, ram: 4, rom: 32, camera: 5},
    {name: "itel", price: 6445, ram: 4, rom: 32, camera: 5},
    {name: "iphone", price: 8695, ram: 4, rom: 32, camera: 5},
    {name: "samsung", price: 8989, ram: 4, rom: 32, camera: 5},
    {name: "htc", price: 35999, ram: 4, rom: 32, camera: 5},
    {name: "walton", price: 4453, ram: 4, rom: 32, camera: 5},
    {name: "shaomi", price: 34645, ram: 4, rom: 32, camera: 5},
    {name: "oppo", price: 46784, ram: 4, rom: 32, camera: 5},
]

let cheapest= phones[0];
for(let phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);