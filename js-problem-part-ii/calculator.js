function addition(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multip(num1,num2){
    return num1 * num2;
}
function devide(num1,num2){
    return num1 / num2;
}

function calculator(a ,b,operator){
    if(operator === "addition"){
         return addition(a,b)
    }
    else if( operator === "subtract"){
        const result= subtract(a,b);
        return result;
    }
    else if( operator === "multip"){
        const result= multip(a,b);
        return result;
    }
    else if( operator === "devide"){
       const result= devide(a,b);
       return result;
    }
    else{
        return "only 'addition','subtract','multip','devide'"
    }
           
}

const rehave =calculator(5,6,"addition");
console.log(rehave);