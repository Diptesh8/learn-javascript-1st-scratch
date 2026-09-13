function minimum(number){
    const min = Math.min(...number)
    return min ;

}
// const name = [12,5,7,4,86,4,3];
// const value = minimum(name);
const value =minimum([4,5,2,7,8,32,1,-8,34,-456]);
console.log("the minimum number is =",value);

// maxmium number find out in an array----------------------

function maxmimum(numbers){
const max =Math.max(...numbers)
return max;

}

const naamber = maxmimum([12,65,7,2,866,454,23,980,4]);
console.log("the max number is =",naamber);