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
        return "input a valid array do not try anything";
    }
for(const num of array){
  if(typeof num === "number" && !isNaN(num)){
  finalArray.push(num);
  }
}
return finalArray;
}
// const outpu= deleteInvalids([18,13,-7,NaN,"unvalid",87]);
// console.log(outpu);

// problem4:= Make a great password making function for kalimuddind chacha---------------

function password(passwords){
    if(typeof passwords !=="object" || passwords === null || 
        passwords.name === undefined || 
        passwords.birthYear === undefined || 
        passwords.siteName === undefined){
        return "invalid";
    } 
     else if( typeof passwords.birthYear !== "number"){
            return "invalid";

            }
      else if(String(passwords.birthYear).length !== 4){
         return "invalid";
      }

         const makePassword =passwords.siteName[0].toUpperCase() + passwords.siteName.slice(1)  + "#" + passwords.name + "@" + passwords.birthYear;
return makePassword;
       
}
const out=password({ name:"dip",birthYear:2090,siteName:"google"});
console.log(out);

