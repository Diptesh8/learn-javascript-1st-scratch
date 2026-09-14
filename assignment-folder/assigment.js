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
 if(typeof name !== "string"){
    return "enter a valid string"
 }
 else if(lastLetter === "a" || lastLetter === "y" || lastLetter === "i" || lastLetter === "e" || lastLetter === "o" || lastLetter === "u" || lastLetter === "w"){
    return "Good name";
 }
 else{
    return "Bad name";
 }
}
// const output= checkName("raja");
// console.log(output);

// problem3:= Virus  in my  Array and filter it only number are allowed using function and return keyword ------------------------------

function deleteInvalids(array){
    let finalArray=[];
    if(Array.isArray(array) !== true){
        console.log("input a valid array do not try anything");
        return;
    }
for(const num of array){
  if(typeof num === "number" && !isNaN(num)){
  finalArray.push(num);
//   console.log(finalArray);
  }
}
return finalArray;
}
const outpu= deleteInvalids([18,13,-7,NaN,"unvalid",87]);
console.log(outpu);

