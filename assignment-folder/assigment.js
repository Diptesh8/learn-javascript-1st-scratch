//Problem-1:= help to Zoo Maneger program ---------------

function calculateMoney(ticket){
    if(ticket <= 0){
        return "enter positive number";
    }
    const ticketSell =ticket * 120
    const dailyExpenses =8 * 50 + 500;
    const profit = ticketSell - dailyExpenses ;
    return profit;
}
// const output =calculateMoney(10);
// console.log(output);

//Problem2:= Check  a Name is Good or Bad usiging functionand return keyword----------------------------

function checkName(name){
    
 let lastLetter= name[name.length-1];
 if(lastLetter === "a" || lastLetter === "y" || lastLetter === "i" || lastLetter === "e" || lastLetter === "o" || lastLetter === "u" || lastLetter === "w"){
    return "Good name";
 }
 else{
    return "Bad name";
 }
}
const output= checkName("raji");
console.log(output);