// objective : write a function to give me the sum of all numbers in an array-----------------------------

function sumOfNumbers(numbers){
    let sum = 0;
     for(const number of numbers){
      console.log(number);
      if(number % 2===0){
        sum = sum + number;
      }
      
 }
  return sum;
    
}
const numbs = [4,6,8,9,6,8,5,4,9,10];
const m = sumOfNumbers(numbs);
console.log("sum of number is",m);
