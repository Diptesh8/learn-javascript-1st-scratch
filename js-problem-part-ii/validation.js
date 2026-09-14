function error(num1 ,num2){
  if(typeof num1 !== "number" || typeof num2 !== "number"){
    return "enter a valid number";
  }
    console.log(num1);
const mul = num1 *num2;
return mul;
}

// const number = error(dh,"vdgg");
// console.log(number);

// enter a valid  name otherwise show the error output------------------------

function fullname(first,second){
    if(typeof first !== "string" ){
        return"error please enter a valid string"
    }
    else if(typeof second !== "string"){
        return"error please enter a valid string"
    }
        
    
    const attach =first + " " + second;
    return attach;

}

const names= fullname("batash", );
console.log(names);