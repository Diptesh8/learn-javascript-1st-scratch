// take four parameters.multiply the four numbers and then return the result.--------------------------

function mul(num1,num2,num3,num4){
   const multiple = num1 * num2 * num3 * num4 ;
   return multiple;
}
// const ans = mul(3,5,2,3);
// console.log(ans);

// Task-2 take a number if the number is odd multiply iy by 2 and return the result.if the number is even divide it by 2 and return the result

function number(num1){
    if(num1 % 2===1){
      return num1 * 2;
    }
    else{
      return  num1 / 2;
    }
}
// const num= number(8);
// console.log(num);

// Task-3  write a function called make_avg()which will take an array of integers and the size of that array and return the average of those values

function avg(numbers) {
    let sum = 0;
    let average = 0;
    const lent =numbers.length;
    for(const num of numbers){
    sum =sum + num
    average= sum / lent;
    }

    return average;
    
}
// const numbers=[3,5,7,8,5,8,7];
// const final = avg(numbers);
// console.log(final);

// Task-4 write a function called count_zer0() which will take  a binary string (binary string is a string which is consist of only 0 and 1)as parameter and count how many 0's  are there in that string.

function numbers(numbers){
    let variable =0 ;
    for(const sonkha of numbers){
        if(sonkha === "0"){
          variable= variable + 1;
        }
    }
    return variable;


}
const string ="100101010010010";
// const count =numbers(string);
// console.log(count)

// Task-5 write a function called odd_even() which takes an integer value and tells whether this value is even or odd. if evev return even.if odd return odd