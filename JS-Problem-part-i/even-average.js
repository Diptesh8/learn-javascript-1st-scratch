function evenAverage(numbers){
    const evenArray=[];
    let sum =0;
    let average =0;
    for(const number of numbers){
        if(number %2===0){
            evenArray.push(number);
        }
    }
    for(const even of evenArray){
        sum= sum+even;
        const length =evenArray.length;
        average =sum /length
    }

     return average;

    // console.log(evenArray);

}
const number =[13,4,67,8,14,84,3,64];
const average = evenAverage(number);
console.log(average);