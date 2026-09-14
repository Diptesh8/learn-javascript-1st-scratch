// help to Zoo Maneger program ---------------

function calculateMoney(ticket){
    if(ticket <= 0){
        return "enter positive number";
    }
    const ticketSell =ticket * 120
    const dailyExpenses =8 * 50 + 500;
    const profit = ticketSell - dailyExpenses ;
    return profit;
}
const output =calculateMoney(10);
console.log(output);