function max(num1, num2){
    if(num1>num2){
        console.log(num1)
    }
    else{
        console.log(num2)
    }

console
}

max(45,989);

// find the max number in 3 numbers---------------------------------

function maxmium(nam1,nam2,nam3){
    if(nam1 > nam2 && nam1 >nam3){
        return nam1;
    }
    else if(nam2 > nam1 && nam2 > nam3){
        return nam2;
    }
    else{
        return nam3;
    }

}
// const number =[32,65,51];
const answer=maxmium(65,98,436);
console.log("the maximum number is=",answer);
