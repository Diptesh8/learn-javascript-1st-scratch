const product = [
    {name: "shampoo", price:300 },
    {name: "pant", price:1200},
    {name: "shirt", price:2000},
    {name: "protin", price:1300},
]

function totalPrice(costs){
    let sum = 0;
    for(const cost of costs){
        sum = sum + cost.price

    }
    console.log(costs);
    return sum;

}

const costs = totalPrice(product);
console.log(costs);