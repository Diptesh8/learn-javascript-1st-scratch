// function takes an arry as paramiter .and give me the average of the odd numbers in the array----------
function oddAverage(numbers){
    let sum =0;
    let count =0;
    for(const num of numbers){
       if(num % 2  !== 0){
        sum = sum +num
         count  = count +1
       }
      
    }
    const answer= sum/ count;
    return answer;
}

const numbers = [42,13,58,65,81,96,7,13];
const average = oddAverage(numbers);
console.log(average);