// inchi to feet using javascript-------------------
function inchiFeet(inch){
    const feet = inch / 12;
    const feetnumber =parseInt(feet)
    const feetInchi =inch % 12;
    const result =feetnumber + " feet" + feetInchi + " inchi"
    return result; 

}
const suvoHeight= "53";
const answerFeet= inchiFeet(suvoHeight);
console.log(answerFeet);

// miles to kilomiter using function -----------------------------------------

function mileKilomiter(mile){

    const kilomiter =mile * 1.60934;
    return kilomiter;
}
const mile= "13";
const kilo = mileKilomiter(mile);
console.log(kilo);