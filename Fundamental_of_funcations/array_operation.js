// objective : write a function to give me the sum of all numbers in an array-----------------------------

function sumOfNumbers(numbers){
    let sum = 0;
     for(const number of numbers){
      console.log(number);
      sum = sum + number;
 }
    
    return sum;
}
const numbs = [4,6,8,9,6,8,5,4,9];
const sum = sumOfNumbers(numbs);
console.log("sum of number is",sum);
