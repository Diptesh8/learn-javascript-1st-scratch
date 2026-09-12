function leepyear(year){
    if(year % 100 !== 0){
    return false;
    }
    else if(year % 400 === 0){
        return true;
    }
    else if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
       
}
const year=2016;
const result =leepyear(year);
console.log(result);