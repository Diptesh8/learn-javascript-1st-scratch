const product = [
    {name: "shampoo", price:300, quainty :3 },
    {name: "pant", price:1200, quainty :6},
    {name: "shirt", price:2000, quainty :4},
    {name: "protin", price:1300, quainty :5},
]

function totalPrice(costs){
    let sum = 0;
    let total =0;
    for(const cost of costs){
        sum =  cost.price * cost.quainty;
        total = total + sum;
        
    }
    return total;

}

const costs = totalPrice(product);
console.log(costs);