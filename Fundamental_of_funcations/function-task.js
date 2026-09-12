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
const num= number(8);
console.log(num);