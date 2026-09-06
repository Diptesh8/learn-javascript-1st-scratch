let sum = 0 ;
let num ;

for(let num =20 ; num >= 0; num--){
    sum = sum + num;
    console.log(num);
}
console.log("sum of numbers from1 to 20 is :-",sum);

// find 1 to 30 all even number-----------------------


// for(let i = 1 ; i<=30;i++){
//      if(i%2==!0){
// console.log(i);
//      }
    
// }

// find the number 1 to 30 division 3 and 5----------
for(let num =1 ;num <= 30 ;num++){
    if(num%3===0 && num%5===0){
        console.log(num);
    }
}